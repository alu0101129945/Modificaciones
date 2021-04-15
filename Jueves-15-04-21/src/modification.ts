/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file modification.ts
  * @version 1.0
  * @author Laura Cañizares Herrera
  * @date 15 de Abril 2021
  * @brief Modification practice 7
*/

/**
 * @brief Namespace to generate a FIFO
 */
export namespace FIFO {
  export class Queue {
    /**
     * 
     * @brief Constructor of Queue class
     * @param queue queue of any type of data
     */
    constructor(private queue: any[]){
    }

    /**
     * @brief Get the queue
     */
    getQueue(){
      return this.queue;
    }

    /**
     * 
     * @brief Set the queue
     * @param queue queue that want to set
     */
    setQueue(queue: any[]){
      this.queue = queue;
    }

    /**
     * 
     * @brief Add an item to the queue
     * @param aux item that want to add
     */
    push(aux: any): void {
      this.queue.push(aux);
    }

    /**
     * @brief Extracts the first item inserted in the queue
     */
    pop(){
      this.queue.shift();
    }

    /**
     * @return Returns the first item inserted in the queue without extracting it
     */
    pseek(): any{
      return this.queue[0];
    }

    /**
     * @return Returns the number of items that the queue contains
     */
    size(): number{
      return this.queue.length;
    }

    /**
     * @brief View the content of the queue
     */
    print(){
      for(let i = 0; i < this.queue.length; i++){
        console.log(this.queue[i]);
      }
      console.log();
    }
  }
}

const q = new FIFO.Queue(['Hola', 1]);

console.log('Se realiza un push: ');
q.push(2);
q.print();

console.log('Se realiza un pop: ');
q.pop();
q.print();

let value: any;

console.log(`Este es el primer elemento insertado en la cola:  ${q.pseek()}`);
console.log(`El tamaño de la cola es:  ${q.size()}`);