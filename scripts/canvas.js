var handle,handlr,handleHasMoved,handleWasSelected;
//var path = new Path.Circle(view.center, 100);
//path.strokeColor = 'black';
//path.selected = true;
var path,paths=[];
console.log(project.activeLayer);

function onMouseDown(event) {
	handle = null;
	//hittest for selected path
	//if nothing gets back hittest on layer
	//if nothing's hit then start a path
	//or modify to add segments on click
	var hitResult =  project.activeLayer.hitTest(event.point, { stroke: true, handles: true, segments: true,tolerance: 25 });
	// var hitResult = !path ? false : path.hitTest(event.point, { handles: true, segments: true,tolerance: 10 });
	if (hitResult) {
		if (!hitResult.item.selected) {
			project.activeLayer.selected = false;
			hitResult.item.selected = true;
		}
		if (hitResult.type == 'handle-in') {
			handle = hitResult.segment.handleIn;
			handlr = hitResult.segment.handleOut;
		} else if (hitResult.type == 'handle-out') {
			handle = hitResult.segment.handleOut;
			handlr = hitResult.segment.handleIn;
		} else if (hitResult.type == 'segment') {
			handle = hitResult.segment.point;
			if(!handle.selected) {
				handle.selected=true;
			} else handleWasSelected = true;
		} else if (hitResult.type == 'stroke') {
			path = null;
			//console.log(hitResult);
			handle = hitResult.item;
		}
	} else {
		// if (path) {
	 //        path.selected = false;
	 //    }
	    project.activeLayer.selected = false;
	    // Create a new path and set its stroke color to black:
	    path = new Path();
	    path.add(event.point);
	    path.strokeColor = 'black';

	    // Select the path, so we can see its segment points:
	    path.selected = true;
	}
}

function onMouseDrag(event) {
	if (handle) {
		if (handle instanceof Path) {
			handle.translate(event.delta);
		} else {
			handle.x += event.delta.x;
			//handlr.x -= event.delta.x;
			handle.y += event.delta.y;
			var a = handle.angle - 180;
			a = (a < 0 ? a+360 : a)
			handlr.angle = a;
			console.log(a);
			handleHasMoved = true;
		}
	} else {
		path.add(event.point);
	}
}

function onMouseUp(event) {
	if (handle) {
		if (handleWasSelected && handleHasMoved) {
			handleWasSelected=false;
			handleHasMoved=false;
		} else if (handleWasSelected) {
			handleWasSelected=false;
			handle.selected=false;
		}
		handleHasMoved = false;
	} else if (path) {
		path.simplify(10);
		//path.selected = true;
	}
}

function endPath(p){
	paths.push(p);
	p.simplify(25);

}
