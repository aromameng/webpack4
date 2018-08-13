class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
        this.history = [];
        this.currentIndex = this.history.length - 1;
        this.refresh = this.refresh.bind(this);
        this.backOff = this.backOff.bind(this);
        this.isBack = false;
        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false);
    }
    route(path, callback) {
        this.routes[path] = callback || function () { };
    }
    refresh() {
        // 获取当前URL中的hash路径
        this.currentUrl = location.hash.slice(1) || '/';

        if (!this.isBack) {
            if (this.currentIndex < this.history.length - 1)
                this.history = this.history.slice(0, this.currentIndex + 1);

            this.history.push(this.currentUrl);
            this.currentIndex++;
        }

        // console.log('指针:', this.currentIndex, 'history:', this.history);
        this.routes[this.currentUrl]();
        this.isBack = false;
    }
    backOff() {
        this.isBack = true;
        this.currentIndex <= 0 ?
            (this.currentIndex = 0) :
            (this.currentIndex = this.currentIndex - 1);
        location.hash = `#${this.history[this.currentIndex]}`;
        this.routes[this.history[this.currentIndex]]();
    }
}

export default new Router()