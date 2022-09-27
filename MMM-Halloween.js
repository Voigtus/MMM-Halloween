/* Magic Mirror
 * Module: MMM-Halloween
 *
 * By Voigtus
 * MIT Licensed.
 */
Module.register("MMM-Halloween", {
    defaults: {
        imageNameList: [],
        videoNameList: [],
        scareInterval: 0,
        currentScareId: "",
        scareTime: 0
    },

    start: function () {
        this.url = "";
        setInterval(() => {
            this.triggerNewScare();
            setTimeout(() => {
                this.hideScare();
            }, this.config.scareTime);
        }, this.config.scareInterval);
    },

    // Override dom generator.
    getDom: function () {
        var wrapper = document.createElement("div");
        var counter = 0;
        this.config.videoNameList.forEach(v => {
            var video = document.createElement('video');
            video.src = `modules/halloween/videos/${v}`;
            video.type = "video/mp4";
            video.autoplay = false;
            video.id = `scare_${counter}`;
            video.hidden = true;
            wrapper.appendChild(video);
            counter++;
        });
        this.config.imageNameList.forEach(i => {
            var image = document.createElement("img");
            image.src = `modules/halloween/images/${i}`;
            image.id = `scare_${counter}`;
            image.hidden = true;
            wrapper.appendChild(image);
            counter++;
        });
        this.config.elements = counter;
        return wrapper;
    },

    //TODO add reaction for motion sensor
    notificationReceived(notification, payload, sender) {
        if (notification === "MOTION_DETECTED") {
            this.triggerNewScare();
        }
    },

    triggerNewScare(){
        const randomNumber = Math.floor(Math.random() * this.config.elements);
        var newScare = document.getElementById(`scare_${randomNumber}`);
        if( newScare.tagName == "VIDEO"){
            newScare.currentTime = 0;
            newScare.play();
        }
        newScare.hidden = false;
        this.config.currentScareId = `scare_${randomNumber}`;
    },

    hideScare(){
        if (this.config.currentScareId != ""){
            var oldScare = document.getElementById(this.config.currentScareId);
            if( oldScare.tagName == "VIDEO"){
                oldScare.pause();
            }
            oldScare.hidden = true;
        }
    }
});
