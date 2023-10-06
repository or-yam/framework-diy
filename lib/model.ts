export class Model<T> {
  #model: any;
  // const _modelKeys = Object.keys(_model);
  get model() {
    return this.#model;
  }

  set model(model) {
    this.#model = model;
    this.notify();
  }

  constructor(model) {
    Object.keys(model).forEach((key) => {

      Object.defineProperty(this, key, {
        get() {
          return this.#model[key];
        },
        set(value) {
          this.#model[key] = value;
          this.notify();
        }
      });
    })
  }

  notify() {
// whenever a model is updated, notify all subscribers
    subscribers.get(this.#model).forEach((subscriber) => notifySubscriber());//TODO: implement using the callback
  }
}

let subscribers = new WeakMap();
// each model has a set of watchers - the component/function that is subscribed to the model
export const subscribe = (model, watcher, callback) => {
  if (!subscribers.has(model)) {
    const watchers = new WeakMap();
    watchers.set(watcher, callback);
    subscribers.set(model, watcher);
  } else {
    subscribers.get(model).add(watcher);
  }
}


// Usage: in a component
// Path: lib/component.ts

const exampleComponent = () => {
  const exampleSymbol = Symbol('exampleComponent'); // so we have a unique identifier for this component
  let model = new Model({ name: 'John', age: 30, city: 'New York', hobbies: ['swimming', 'running', 'surfing'] });

  const updateData = (property, value) => { 
    model[property] = value;
  }

subscribe(model, exampleSymbol, updateData);
}

//TODO: implement a structure to connect the symbols to components
//TODO: implement unsubscribe