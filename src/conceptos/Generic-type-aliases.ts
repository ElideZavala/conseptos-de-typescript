type MyEvent<T> = {
    target: T;
    type: string;
};

type ButtonEvent = MyEvent<HTMLButtonElement>;

let myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector("#myButton"),
    type: "click",
};

myEvent.target?.addEventListener(myEvent.type, () => {
    console.log("Hello World!");
});

/* Contruimos otro type apartir de MyEvent TimeEvent  */
type TimedEvent<T> = {
    event: MyEvent<T>;
    from: Date;
    to: Date;
};

type ButtonClickEvent = MyEvent<HTMLButtonElement>;
type TimeButtonClickEvent = TimedEvent<HTMLButtonElement>;

const button = document.querySelector("button");
const timedEvent: TimeButtonClickEvent = {
    event: {
        target: button,
        type: "click",
    },
    from: new Date("2022-01-01T00:00:00Z"),
    to: new Date("2022-01-01T01:00:00Z"),
};

timedEvent.event.target?.addEventListener(timedEvent.event.type, () => {
    console.log("Hello World!");
});

// Si la fecha actual esta entre from y to, dispara el evento del botón
if (new Date() >= timedEvent.from && new Date() <= timedEvent.to) {
    button.dispatchEvent(new Event(timedEvent.event.type));
}

// dispathEvent() es un método de la interfaz EventTarget, que es implementada por Element, Document y Window.

function triggerEvent<T>(event: MyEvent<T>): void {
    console.log(event);
}

triggerEvent({
    target: document.querySelector("#myButton"),
    type: "mouseover",
});
