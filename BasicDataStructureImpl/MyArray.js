class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const deletedItem = this.data[index];
        this.shiftArray(index);
        return deletedItem;
    }

    shiftArray(index){
        for(let i=index;i<this.length - 1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray);

newArray.push('abc');
newArray.push('abc1');
newArray.push('abc2');
newArray.push('abc3');

console.log(newArray);

// console.log('Popped element '+newArray.pop());

console.log(newArray.delete(2));
console.log(newArray);


