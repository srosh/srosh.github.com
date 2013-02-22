var MODE_INIT = 0
	,MODE_DRAW = 1
	,MODE_DRAG = 2
	,MODE_MODIFY = 3
	,ALIGN_TOLERANCE = 15
	,CLOSE_PATH_TOLERANCE = 10
var mode = MODE_DRAW;


var modify_segment,modify_handle=0,draw_path,selected_path,modify_hit_test,align_handles=false,
	layer = project.activeLayer

function onMouseDown(event) {
	switch (mode) {
		case MODE_INIT :
		break;
		case MODE_DRAW :
			//if (draw_path) draw_path.selected = false;
			layer.selected = false;
			draw_path = new Path();
			draw_path.add(event.point);
			draw_path.strokeColor = 'black';
			draw_path.selected = true;
			selected_path = draw_path;
		break;
		case MODE_MODIFY :
			if (selected_path) {
				modify_hit_test = selected_path.hitTest(event.point, { stroke: true, handles: true, segments: true, tolerance: 15 });
				if (modify_hit_test) {
					switch (modify_hit_test.type) {
						case 'handle-in':
							modify_segment = modify_hit_test.segment;
							modify_segment.aligned = handlesAligned(modify_segment);
							modify_handle = -1;
						break;
						case 'handle-out':
							modify_segment = modify_hit_test.segment;
							modify_segment.aligned = handlesAligned(modify_segment);
							modify_handle = 1;
						break;
						case 'segment':
							modify_segment = modify_hit_test.segment;
							modify_handle = 0;
						break;
						case 'stroke':
							if(modify_segment){
								modify_segment.selected = false;
								modify_segment = null;
							}
							modify_handle = 0;
						break;
					}
				} else {
					selected_path.selected = false;
					selected_path = null;
				}
			}
		break;
	}
}

function onMouseDrag(event) {
	switch (mode) {
		case MODE_INIT :
		break;
		case MODE_DRAW :
			draw_path.add(event.point);
		break;
		case MODE_MODIFY :
			if (selected_path && modify_segment) {
				if (event.modifiers.option) align_handles = !modify_segment.aligned;
				else align_handles = modify_segment.aligned;
				switch (modify_handle) {
					case -1:
						if (align_handles) angler(modify_segment.handleOut , fixAngle(angled(modify_segment.handleIn+event.delta)+180));
						modify_segment.handleIn += event.delta;
					break;
					case 0:
						modify_segment.point += event.delta;
					break;
					case 1:
						if (align_handles) angler(modify_segment.handleIn , fixAngle(angled(modify_segment.handleOut+event.delta)+180));
						modify_segment.handleOut += event.delta;
					break;
				}
			} else if (selected_path) {
				selected_path.translate(event.delta);
			}
		break;
	}
}

function onMouseUp(event) {
	switch (mode) {
		case MODE_INIT :
		break;
		case MODE_DRAW :
			if (draw_path.segments.length<2) {
				draw_path.remove();
			} else {
				draw_path.simplify(15);

				if (draw_path.lastSegment.point.getDistance(draw_path.firstSegment.point) <= CLOSE_PATH_TOLERANCE) {
					draw_path.firstSegment.handleIn = draw_path.lastSegment.handleIn;
					draw_path.removeSegment(draw_path.lastSegment.index);
					draw_path.closed = true;
				}
				draw_path.selected = false;
				draw_path.selected = true;
				mode = MODE_MODIFY;
			}
		break;
		case MODE_MODIFY :
			if (!selected_path) {
				modify_hit_test = layer.hitTest(event.point,{ stroke: true, tolerance: 15 });
				if (modify_hit_test) {
					selected_path = modify_hit_test.item;
					selected_path.selected = true;
				} else {
					mode = MODE_DRAW;
				}
			}
			align_handles = false;
		break;
	}
}

function fixAngle(angle){
	var ret = angle %360 ;
	return (ret<0 ? ret+360 : ret);
}
function angled(point){
	// console.log(point.angle,fixAngle(point.angle + (point.quadrant > 2 ? 180 : 0)))
	return fixAngle(point.angle + (point.quadrant > 2 ? 180 : 0));
}
function angler(point,angle){
	if (angle>180) {
		point.quadrant = 2 + (angle>270 ? 2 : 1);
		point.angle = angle;
		console.log(point.quadrant,point.angle,angle)
	} else {
		point.quadrant = (angle>90 ? 2 : 1);
		point.angle = angle;
	}
}

function handlesAligned(segment) {
	var outa = angled(segment.handleOut), ina = angled(segment.handleIn), diff = ina>outa ? ina - outa : outa - ina;
	//console.log(diff,outa,ina,fixAngle(diff -180));
	return fixAngle(diff) <=ALIGN_TOLERANCE;
}
