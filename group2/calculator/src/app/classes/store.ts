import { BehaviorSubject, Observable } from "rxjs";

export class Store<T>
{
    private _store: BehaviorSubject<T> = new BehaviorSubject(null)
    public store$: Observable<T> = this._store.asObservable();

    getAll = (): T => this._store.getValue();

    store = (state: T) => this._store.next(state)
}