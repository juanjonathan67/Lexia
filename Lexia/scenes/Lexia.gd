extends Node2D

@onready var location = $Player.position
var JavaScript = Engine.get_singleton("JavaScript")

var saved_index : int
var houses : PackedVector2Array

# Called when the node enters the scene tree for the first time.
func _ready():
	houses.append(Vector2(104, 82))
	houses.append(Vector2(152, 82))
	houses.append(Vector2(232, 66))

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	location = $Player.position
	var index = 1
	for loc in houses : 
		if(((loc.x - location.x)**2 + (loc.y - location.y)**2) < 1):
			if(saved_index != index):
				saved_index = index
				if OS.get_name() == "HTML5":
					var command = "window.location.href='http://localhost:5173/level" + str(index)
					JavaScript.eval(command)
				else:
					var url = "http://localhost:5173/level" + str(index)
					OS.shell_open(url)
		index += 1
	
