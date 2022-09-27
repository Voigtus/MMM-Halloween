/* Magic Mirror
 * Module: MMM-Halloween
 *
 * By Voigtus
 * MIT Licensed.
 */
let currentScareId = "";
let baitId = "";
let elements = 0;
Module.register("MMM-Halloween", {
  defaults: {
    imageNameList: [],
    videoNameList: [],
    scareInterval: 0,
    scareTime: 0,
    muted: true,
    bait: ""
  },

  //set interval for scare
  start: function () {
    setInterval(() => {
      triggerNewScare();
      setTimeout(() => {
        hideScare();
      }, this.config.scareTime);
    }, this.config.scareInterval);
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    if (this.config.bait !== "") {
      var image = document.createElement("img");
      image.src = `modules/MMM-Halloween/bait/${this.config.bait}`;
      image.id = `bait`;
      image.hidden = false;
      wrapper.appendChild(image);
      baitId = `bait`;
    }

    var counter = 0;
    this.config.videoNameList.forEach(v => {
      var video = document.createElement('video');
      video.src = `modules/MMM-Halloween/videos/${v}`;
      video.type = "video/mp4";
      video.autoplay = false;
      video.id = `scare_${counter}`;
      video.hidden = true;
      video.muted = this.muted;
      wrapper.appendChild(video);
      counter++;
    });

    this.config.imageNameList.forEach(imageName => {
      var image = document.createElement("img");
      image.src = `modules/MMM-Halloween/images/${imageName}`;
      image.id = `scare_${counter}`;
      image.hidden = true;
      wrapper.appendChild(image);
      counter++;
    });

    elements = counter;
    return wrapper;
  },

  //TODO add reaction for motion sensor
  // notificationReceived: function (notification, payload, sender) {
  //   if (notification === "MOTION_DETECTED") {
  //    triggerNewScare();
  //   }
  // },
});

function triggerNewScare() {
  const randomNumber = Math.floor(Math.random() * elements);
  var newScare = document.getElementById(`scare_${randomNumber}`);
  if (newScare.tagName === "VIDEO") {
    newScare.currentTime = 0;
    newScare.play();
  }
  if(baitId!== ""){
    var bait = document.getElementById(baitId);
    bait.hidden = true;
  }
  newScare.hidden = false;
  currentScareId = `scare_${randomNumber}`;
}

function hideScare() {
  if (currentScareId !== "") {
    var oldScare = document.getElementById(currentScareId);
    if (oldScare.tagName === "VIDEO") {
      oldScare.pause();
    }
    oldScare.hidden = true;
  }
  if(baitId!== ""){
    var bait = document.getElementById(baitId);
    bait.hidden = false;
  }
}
