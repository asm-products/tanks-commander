var timeOut = 1.0;
var detachChildren = false;
var explosion : GameObject; 

function OnCollisionEnter (collision : Collision) { 
	var contact : ContactPoint = collision.contacts[0]; 
	var rotation = Quaternion.FromToRotation(Vector3.up, contact.normal); 
	var instantiatedExplosion : GameObject = Instantiate (explosion, contact.point, rotation); 
	Destroy(gameObject); 
} 

function Awake ()
{
	Invoke("DestroyNow", timeOut);
}

function DestroyNow ()
{
	if (detachChildren) {
		transform.DetachChildren ();
	}
	DestroyObject (gameObject);
}