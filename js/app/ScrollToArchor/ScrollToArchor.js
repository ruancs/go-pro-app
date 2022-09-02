export default class ScrollToArchor {
	constructor() {
        window.addEventListener("hashchange", this.offsetAnchor());
        window.setTimeout(this.offsetAnchor(), 1);
	}
    offsetAnchor(){
        window.scrollTo(window.scrollX, window.scrollY - 130);
    }
}