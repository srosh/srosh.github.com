var MODE_INIT = 0
	,MODE_DRAW = 1
	,MODE_DRAG = 2
	,MODE_MODIFY = 3
	,FOLLOW_TOLERANCE = 15
var mode = MODE_DRAW;


var modify_segment,modify_handle=0,draw_path,selected_path,modify_hit_test,align_handles=true,
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
							modify_handle = -1;
						break;
						case 'handle-out':
							modify_segment = modify_hit_test.segment;
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
				var angleDiff,angleRes;
				switch (modify_handle) {
					case -1:
						if (align_handles) modify_segment.handleOut.angle += ((modify_segment.handleIn+event.delta).angle - modify_segment.handleOut.angle)%360   - 180;
						modify_segment.handleIn += event.delta;
					break;
					case 0:
						modify_segment.point += event.delta;
					break;
					case 1:
						if (align_handles) modify_segment.handleIn.angle += ((modify_segment.handleOut+event.delta).angle - modify_segment.handleIn.angle)%360   - 180;
						modify_segment.handleOut += event.delta;
					break;
				}
				console.log(angleDiff,angleRes);
			}
		break;
	}
}

function onMouseUp(event) {
	switch (mode) {
		case MODE_INIT :
		break;
		case MODE_DRAW :
			draw_path.simplify(25);
			draw_path.selected = false;
			draw_path.selected = true;
			mode = MODE_MODIFY;
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
		break;
	}
}