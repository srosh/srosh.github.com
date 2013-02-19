var handle,handleHasMoved,handleWasSelected;
var path = new Path.Circle(view.center, 100);
path.strokeColor = 'black';

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
}

function onMouseDrag(event) {
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