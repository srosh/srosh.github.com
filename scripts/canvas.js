var handle,handleHasMoved,handleWasSelected;
// Create a circle shaped path at the center of the view,
// with a radius of 100:
var path = new Path.Circle(view.center, 100);
path.strokeColor = 'black';

// Fully select the path, so we can see its handles:
path.selected = true;

function onMouseDown(event) {
	handle = null;
	// Do a hit test on path for handles:
	var hitResult = path.hitTest(event.point, { handles: true, segments: true,tolerance: 10 });
	if (hitResult) {
		if (hitResult.type == 'handle-in') {
			handle = hitResult.segment.handleIn;
		} else if (hitResult.type == 'handle-out') {
			handle = hitResult.segment.handleOut;
		} else if (hitResult.type == 'segment') {
			handle = hitResult.segment.point;
			if(!handle.selected) {
				handle.selected=true;
			} else handleWasSelected = true;
	console.log(handleWasSelected);

		}
	}
	//console.log(hitResult);
}

function onMouseDrag(event) {
	// If we hit a handle before, move it:
	if (handle) {
		handle.x += event.delta.x;
		handle.y += event.delta.y;
		handleHasMoved = true;
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
	}
}