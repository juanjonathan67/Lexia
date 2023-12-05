extends CharacterBody2D

@export var SPEED = 50
@export var INVENTORY: Inventory

@onready var axis = Vector2.ZERO
@onready var animations = $AnimatedSprite2D

var lastDirection = "Down"

func _ready():
	animations.play("IdleDown")

func _physics_process(delta):
	player_movement(delta)

func player_movement(delta):
	axis = Input.get_vector("Left", "Right", "Up", "Down")
	velocity = axis * SPEED
	
	handle_move()
	handle_idle()
	
	move_and_slide()

func handle_move():
	if(velocity.x < 0 and velocity.y < 0):
		animations.play("MoveUpLeft")
		lastDirection = "UpLeft"
	elif(velocity.x < 0 and velocity.y > 0):
		animations.play("MoveDownLeft")
		lastDirection = "DownLeft"
	elif(velocity.x > 0 and velocity.y < 0):
		animations.play("MoveUpRight")
		lastDirection = "UpRight"
	elif(velocity.x > 0 and velocity.y > 0):
		animations.play("MoveDownRight")
		lastDirection = "DownRight"
	elif(velocity.x < 0):
		animations.play("MoveLeft")
		lastDirection = "Left"
	elif(velocity.x > 0):
		animations.play("MoveRight")
		lastDirection = "Right"
	elif(velocity.y < 0):
		animations.play("MoveUp")
		lastDirection = "Up"
	elif(velocity.y > 0):
		animations.play("MoveDown")
		lastDirection = "Down"

func handle_idle():
	if(velocity == Vector2.ZERO):
		if(lastDirection == "Down"):
			animations.play("IdleDown")
		elif(lastDirection == "DownRight"):
			animations.play("IdleDownRight")
		elif(lastDirection == "DownLeft"):
			animations.play("IdleDownLeft")
		elif(lastDirection == "Up"):
			animations.play("IdleUp")
		elif(lastDirection == "UpLeft"):
			animations.play("IdleUpLeft")
		elif(lastDirection == "UpRight"):
			animations.play("IdleUpRight")
		elif(lastDirection == "Left"):
			animations.play("IdleLeft")
		elif(lastDirection == "Right"):
			animations.play("IdleRight")
