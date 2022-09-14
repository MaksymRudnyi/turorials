function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var BaseLevel = function () {
    function BaseLevel() {}
    /**
     * Build the notification
     *
     * @param {any}    options [description]
     * @param {string} title   [description]
     * @param {string} body    [description]
     */
    BaseLevel.prototype.buildNotification = function (options, type, title, body) {
        if (body === void 0) {
            body = null;
        }
        var notification = document.createElement('div');
        notification.classList.add('toastify');
        notification.classList.add("toastify-" + options.position);
        notification.classList.add("toastify-" + type);
        var notificationContent = document.createElement('div');
        notificationContent.classList.add('toastify-content');
        var titleArea = document.createElement('span');
        titleArea.classList.add('toastify-title');
        titleArea.innerHTML = title;
        var bodyArea = document.createElement('span');
        bodyArea.classList.add('toastify-content');
        bodyArea.innerHTML = body;
        var cancelIcon = document.createElement('span');
        cancelIcon.classList.add('toastify-cancel-icon');
        cancelIcon.innerHTML = '&#x2716;';
        notificationContent.appendChild(titleArea);
        if (body) {
            notificationContent.appendChild(bodyArea);
        }
        notificationContent.appendChild(cancelIcon);
        notification.appendChild(notificationContent);
        return notification;
    };
    /**
     * Show the notification
     *
     * @param {HTMLElement} notification [description]
     * @param {any}         options      [description]
     */
    BaseLevel.prototype.showNotification = function (notification, options) {
        var _this = this;
        var target = this.getTarget(options);
        target.appendChild(notification);
        this.fadeIn(notification, options.speed).then(function () {
            _this.setUpEventListener(notification, options);
            setTimeout(function () {
                _this.hideNotification(notification, options);
            }, options.delay);
        });
    };
    /**
     * Hide the notification item
     *
     * @param {HTMLElement} notification [description]
     * @param {any} options [description]
     */
    BaseLevel.prototype.hideNotification = function (notification, options) {
        this.fadeOut(notification, options.speed).then(function () {
            notification.parentNode.removeChild(notification);
        });
    };
    /**
     * Set up the event listener
     * @param {HTMLElement} notification [description]
     */
    BaseLevel.prototype.setUpEventListener = function (notification, options) {
        var element = notification.lastElementChild;
        element.addEventListener('click', function closeIconClicked(event) {
            event.preventDefault();
            element.removeEventListener("click", closeIconClicked, false);
            this.hideNotification(notification, options);
        }.bind(this));
    };
    /**
     * Face the element out
     *
     * @param {HTMLElement} element
     * @param {Number} speed
     */
    BaseLevel.prototype.fadeOut = function (element, speed) {
        return new Promise(function (resolve, reject) {
            var opacity = 1;
            var timer = setInterval(function () {
                if (opacity <= 0.1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                    resolve();
                }
                element.style.opacity = opacity.toString();
                element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
                opacity -= opacity * 0.1;
            }, speed);
        });
    };
    /**
     * Face the element in
     *
     * @param {HTMLElement} element [description]
     * @param {Number} speed [description]
     */
    BaseLevel.prototype.fadeIn = function (element, speed) {
        return new Promise(function (resolve, reject) {
            var opacity = 0;
            var timer = setInterval(function () {
                if (opacity > 1) {
                    clearInterval(timer);
                    resolve();
                }
                element.style.opacity = opacity.toString();
                element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
                if (opacity === 0) {
                    opacity = 0.1;
                    return;
                }
                opacity += opacity * 0.1;
            }, speed);
        });
    };
    /**
     * Get the target
     *
     * @param options
     */
    BaseLevel.prototype.getTarget = function (options) {
        if (options.element !== 'body') {
            return document.getElementById(options.element);
        }
        return document.body;
    };
    return BaseLevel;
}();

var Success = new (function (_super) {
    __extends(Success, _super);
    function Success() {
        _super.apply(this, arguments);
    }
    /**
     * Fire the toaster notification
     * @param {string} title [description]
     * @param {string} body  [description]
     * @param {any}    options
     */
    Success.prototype.fire = function (options, title, body) {
        if (body === void 0) {
            body = null;
        }
        var notification = this.buildNotification(options, 'success', title, body);
        this.showNotification(notification, options);
    };
    return Success;
}(BaseLevel))();

var Info = new (function (_super) {
    __extends(Info, _super);
    function Info() {
        _super.apply(this, arguments);
    }
    /**
     * Fire the toaster notification
     *
     * @param {string} title [description]
     * @param {string} body  [description]
     * @param {any}    options
     */
    Info.prototype.fire = function (options, title, body) {
        if (body === void 0) {
            body = null;
        }
        var notification = this.buildNotification(options, 'info', title, body);
        this.showNotification(notification, options);
    };
    return Info;
}(BaseLevel))();

var Warning = new (function (_super) {
    __extends(Warning, _super);
    function Warning() {
        _super.apply(this, arguments);
    }
    /**
     * Fire the toaster notification
     *
     * @param {string} title [description]
     * @param {string} body  [description]
     * @param {any}    options
     */
    Warning.prototype.fire = function (options, title, body) {
        if (body === void 0) {
            body = null;
        }
        var notification = this.buildNotification(options, 'warning', title, body);
        this.showNotification(notification, options);
    };
    return Warning;
}(BaseLevel))();

var Error = new (function (_super) {
    __extends(Error, _super);
    function Error() {
        _super.apply(this, arguments);
    }
    /**
     * Fire the toaster notification
     *
     * @param {string} title [description]
     * @param {string} body  [description]
     * @param {any}    options
     */
    Error.prototype.fire = function (options, title, body) {
        if (body === void 0) {
            body = null;
        }
        var notification = this.buildNotification(options, 'error', title, body);
        this.showNotification(notification, options);
    };
    return Error;
}(BaseLevel))();

var Default = new (function (_super) {
    __extends(Default, _super);
    function Default() {
        _super.apply(this, arguments);
    }
    /**
     * Fire the toaster notification
     *
     * @param {string} title [description]
     * @param {string} body  [description]
     * @param {any}    options
     */
    Default.prototype.fire = function (options, title, body) {
        if (body === void 0) {
            body = null;
        }
        var notification = this.buildNotification(options, 'default', title, body);
        this.showNotification(notification, options);
    };
    return Default;
}(BaseLevel))();

var Toastify = function () {
    function Toastify() {
        /**
         * The different type of levels
         * @type {object}
         */
        this.levels = {
            success: Success,
            info: Info,
            warning: Warning,
            error: Error,
            default: Default
        };
        /**
         * The configuration options
         *
         * @type {object}
         */
        this.options = {
            position: 'bottom-right',
            delay: 5000,
            speed: 10,
            element: 'body'
        };
    }
    /**
     * Set an option value
     *
     * @param {string} key   [description]
     * @param {any}    value [description]
     */
    Toastify.prototype.setOption = function (key, value) {
        if (this.options.hasOwnProperty(key)) {
            this.options[key] = value;
            return;
        }
        throw "The option key " + key + " is not a valid option";
    };
    /**
     * Fire a success message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    Toastify.prototype.success = function (title, body) {
        if (body === void 0) {
            body = null;
        }
        this.levels.success.fire(this.options, title, body);
    };
    /**
     * Fire an info message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    Toastify.prototype.info = function (title, body) {
        if (body === void 0) {
            body = null;
        }
        this.levels.info.fire(this.options, title, body);
    };
    /**
     * Fire a warning message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    Toastify.prototype.warning = function (title, body) {
        if (body === void 0) {
            body = null;
        }
        this.levels.warning.fire(this.options, title, body);
    };
    /**
     * Fire a error message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    Toastify.prototype.error = function (title, body) {
        if (body === void 0) {
            body = null;
        }
        this.levels.error.fire(this.options, title, body);
    };
    /**
     * Fire a default message
     * @param {string}    title [description]
     * @param {string =     null}        body [description]
     */
    Toastify.prototype.default = function (title, body) {
        if (body === void 0) {
            body = null;
        }
        return this.levels.default.fire(this.options, title, body);
    };
    return Toastify;
}();
var index = new Toastify();

export { Toastify };
export default index;
