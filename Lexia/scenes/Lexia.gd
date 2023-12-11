extends Node2D

@onready var location = $Player.position

var saved_index : int
var houses : PackedVector2Array

# Called when the node enters the scene tree for the first time.
func _ready():
	houses.append(Vector2(104, 82))
	houses.append(Vector2(152, 82))
	houses.append(Vector2(232, 66))
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	location = $Player.position
	var index = 0
	for loc in houses : 
		if((loc.x - 1 < location.x && location.x < loc.x + 1) && (loc.y - 1 < location.y && location.y < loc.y + 1)):
			if(saved_index != index):
				saved_index = index
				OS.shell_open("http://localhost:5173/level")
		index += 1
	
	pass
	
