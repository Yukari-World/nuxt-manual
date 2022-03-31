/**
 * Modal Window
 *
 * @abstract
 */
export default class Modal {
	/**
	 * Modal Window Export Position
	 *
	 * @default document.body
	 * @type {Element}
	 */
	bodyDOM = document.body;

	/**
	 * Modal Background
	 *
	 * @default document.createElement('div')
	 * @type {Element}
	 */
	divBack = document.createElement('div');

	/**
	 * Modal Window
	 *
	 * @default document.createElement('div')
	 * @type {Element}
	 */
	divWindow = document.createElement('div');

	/**
	 * コンストラクタメソッド
	 *
	 * @constructs
	 */
	constructor() {
		// Style指定。CSSファイル化することを推奨
		this.divBack.classList.add('popup-background');
		this.divWindow.classList.add('popup-window');

		// 背景部分をクリックすると消す(要素を空にしているだけ)
		// EventはDOM生成毎に作成しないと正しく処理されない(DOMと紐付けしている)
		// また、クラスで行う場合、function内では参照できないので変数に移す必要あり
		const divBackfunc = this.divBack;
		const divWindowfunc = this.divWindow;
		this.divBack.addEventListener('click', function () {
			divBackfunc.remove();
			divWindowfunc.remove();
		});
	}

	/**
	 * Show Modal Window
	 *
	 * @public
	 * @returns {void}
	 */
	show() {
		// Modal Windowの表示
		this.bodyDOM.appendChild(this.divBack);
		this.bodyDOM.appendChild(this.divWindow);
	}

	/**
	 * Hide Modal Window
	 *
	 * @public
	 * @returns {void}
	 */
	hide() {
		this.divBack.remove();
		this.divWindow.remove();
	}
}
