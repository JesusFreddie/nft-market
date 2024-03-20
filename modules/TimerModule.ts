export class TimerModule {

	_hours: Number = 59
	_minutes: Number = 59
	_seconds: Number = 59

	constructor (hoursEl, minutesEl, secondsEl) {

		this.hoursEl = hoursEl
		this.minutesEl = minutesEl
		this.secondsEl = secondsEl

		this.secondsSpan = document.createElement('span')
		this.hoursSpan = document.createElement('span')
		this.minutesSpan = document.createElement('span')
		
		this.hours = 59
		this.minutes = 59
		this.seconds = 59

		setInterval(() => {
			this.changeSeconds()
			if (this.seconds < 1) {
				this.minutes--
				this.seconds = 59
			}
			if (this.minutes < 1) {
				this.hours--
				this.minutes = 59
			}
		}, 1000)
	}

	changeSeconds() {
		this.seconds--
	}

	set seconds(value) {
		this._seconds = value
		this.secondsSpan.innerHTML = this.seconds
		this.secondsEl.innerHTML = this.secondsSpan.innerHTML
		if (this.seconds < 10) {
			this.secondsEl.innerHTML = "0"+this.secondsSpan.innerHTML
		}
	}
	get seconds() {
		return this._seconds
	}

	set minutes(value) {
		this._minutes = value
		this.minutesSpan.innerHTML = this.minutes
		this.minutesEl.innerHTML = this.minutesSpan.innerHTML
		if (this.minutes < 10) {
			this.minutesEl.innerHTML = "0"+this.minutesSpan.innerHTML
		}
	}
	get minutes() {
		return this._minutes
	}

	set hours(value) {
		this._hours = value
		this.hoursSpan.innerHTML = this.hours
		this.hoursEl.innerHTML = this.hoursSpan.innerHTML
	}
	get hours() {
		return this._hours
	}
}