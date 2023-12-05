extends Control

var isOpen = false

# Called when the node enters the scene tree for the first time.
func _ready():
	close()

func _physics_process(delta):
	if (Input.is_action_just_pressed("Inventory")):
		if isOpen:
			close()
		else:
			open()

func open():
	visible = true
	isOpen = true

func close():
	visible = false
	isOpen = false
