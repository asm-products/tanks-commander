private var mouseButton2DownPoint : Vector2;
private var mouseButton2UpPoint : Vector2;
private var mouseRightDrag : boolean = false;
// A speed factor for moving the camera over the terrain. Higher = faster.
var cameraMoveSpeedDamper = 0.02;
var minMaxZoomHeight : Vector2;
var mouseWheelSpeed : float = 150.0;


function Update () {

	if (Input.GetButtonDown("Fire2")) 
	{
		mouseButton2DownPoint = Input.mousePosition;
		mouseRightDrag = true;
	}
	
	if (Input.GetButtonUp("Fire2")) 
	{
		mouseRightDrag = false;
		mouseButton2UpPoint = Input.mousePosition;
	}
	
	if (mouseRightDrag)
	{
		
		var dragDifference : Vector2 = mouseButton2DownPoint - Input.mousePosition;
		// set the move vector by the drag difference
		moveDirection = new Vector3(-dragDifference.x, 0, -dragDifference.y); 
		// Translating so move relative to where the camera currently is located
		transform.Translate(moveDirection * cameraMoveSpeedDamper); 
	}
	
	var mouseWheel : float = Input.GetAxis ("Mouse ScrollWheel");
	if (mouseWheel != 0)
	{
		var currentHeight : float = transform.position.y;
		// change the height of the cam according to the movement of the mouse wheel
		currentHeight -= mouseWheel * mouseWheelSpeed * Time.deltaTime;
		// Set (and clamp) min/max height values
		currentHeight = Mathf.Clamp(currentHeight, minMaxZoomHeight.x, minMaxZoomHeight.y);

		transform.position = Vector3(transform.position.x, currentHeight, transform.position.z);
	}
}

