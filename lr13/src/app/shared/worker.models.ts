export interface MyWorker {
    name: string;
    surname: string;
    phone: string;
    type: number;
    id?: number;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkersDatabase: MyWorker[] = [
    {id: 1, name: 'Иван', surname: 'Иванов', phone: '+7(927)927-27-27', type: 0},
    {id: 2, name: 'Петр', surname: 'Петров', phone: '+7(927)927-27-28', type: 1},
    {id: 3, name: 'Сидр', surname: 'Сидоров', phone: '+7(927)927-27-29', type: 2},
    {id: 4, name: 'Василий', surname: 'Васильев', phone: '+7(927)927-27-30', type: 3}
]