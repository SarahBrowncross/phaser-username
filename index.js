let username = '';

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false
		}
	},
	parent: 'phaser',
	dom: {
		createContainer: true
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	},
	
};


var game = new Phaser.Game(config);

function preload() {
	this.load.image('sky', 'assets/sky.png');
	this.load.image('ground', 'assets/platform.png');
	this.load.image('star', 'assets/star.png');
	this.load.image('bomb', 'assets/bomb.png');
	this.load.html('nameform', 'assets/nameform.html');
}

function getUsername() {
	
}

function create() {
	this.add.image(400, 300, 'sky');
	var text = this.add.text(300, 10, 'Please enter your name', { color: 'white', fontSize: '20px ' });
	var element = this.add.dom(400, 300).createFromCache('nameform');
	console.log(element)

	element.addListener('click');

	element.on('click', function (event) {

		if (event.target.name === 'playButton') {
			var inputText = this.getChildByName('nameField');
			if (inputText.value !== '') {
				this.removeListener('click');
				this.setVisible(false);
				text.setText('Welcome ' + inputText.value);
				username = inputText.value;
				return username;
			}
			else {
				this.scene.tweens.add({
					targets: text,
					alpha: 0.2,
					duration: 250,
					ease: 'Power3',
					yoyo: true
				});
			}
		}

	});
}

function update() {
}

console.log(testUsername)
