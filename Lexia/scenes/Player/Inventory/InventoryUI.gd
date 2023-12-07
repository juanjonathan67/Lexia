extends Control

@onready var inv: Inventory = preload("res://scenes/Player/Inventory/PlayerInventory.tres")
@onready var slots: Array = $NinePatchRect/GridContainer.get_children()

var isOpen = false

# Called when the node enters the scene tree for the first time.
func _ready():
	updateSlots()
	close()

func updateSlots():
	for i in range(min(inv.items.size(), slots.size())):
		slots[i].update(inv.items[i])

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
