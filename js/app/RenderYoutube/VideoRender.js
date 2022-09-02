export default class VideoRender {
    constructor() {
        this.selectors();
    }
    selectors(){
        this.videoContainer = $('.sorteio-banner-video');
        this.videoContainer.each( (i, el)=>{
            let element = $(el);
            this.hasVideo(element)
        })
        
    }
    hasVideo(containerVideo){
        console.log(containerVideo.text());
        if(containerVideo.text().length > 0){
            this.getVideoId(containerVideo);
        }else{
            
            containerVideo.empty();
        }
    }
	getVideoId(containerVideo){
        this.videoId = containerVideo.text();
        this.insertVideoId(containerVideo);
    }	
    insertVideoId(containerVideo){

        const iframe = `<iframe  id="player" type="text/html" height = "738" width ="1485"
        src="http://www.youtube.com/embed/${this.videoId}?enablejsapi=1&origin=https://www.youtube.com/c/GoPro"></iframe>`;
        
        containerVideo.empty();
        containerVideo.append(iframe);
    }
}