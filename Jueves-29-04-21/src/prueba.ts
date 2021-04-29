/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file prueba.ts
  * @version 1.0
  * @author Laura Cañizares Herrera
  * @date 29 de Abril 2021
*/

import * as yargs from 'yargs';
import * as fs from 'fs';
import {spawn} from 'child_process';

/**
 * @brief Shows on screen the names of the files stored in a specific directory
 */
yargs.command({
  command: 'ls',
  describe: 'File name',
  builder: {
    directory: {
      describe: 'Directory name',
      demandOption: true,
      type: 'string',
    },
  },
  /**
   * 
   * @param argv Directory passed by command line
   */
  handler(argv: { directory: string; }) {
    if (typeof argv.directory === 'string') {
      const path: string = './prueba/' + argv.directory;
      if (fs.existsSync(path)) {
        const pointer = fs.readdirSync(path);
        pointer.forEach((filename) => {
          console.log(filename.toString());
        });
      } else {
        console.log('No existe un directorio con ese nombre.');
      }
    }
  },
});

/**
 * @brief Displays the content of all files stored in the directory on the screen. 
 * @brief For each file, it also shows the number of lines, words and characters.
 */
yargs.command({
  command: 'cat',
  describe: 'File content',
  builder: {
    directory: {
      describe: 'Directory name',
      demandOption: true,
      type: 'string',
    },
  },
  /**
   * 
   * @param argv Directory passed by command line
   */
  handler(argv: { directory: string; }) {
    if (typeof argv.directory === 'string') {
      const path: string = './prueba/' + argv.directory;
      if (fs.existsSync(path)) {
        const pointer = fs.readdirSync(path);
        pointer.forEach((filename) => {
          const filePath: string = path + '/' + filename;
          if(fs.existsSync(filePath)) {
            console.log("En el fichero: " + filename);
            const data = fs.readFileSync(filePath, 'utf8');
            console.log(data);
            const wc = spawn('wc', [filePath]);
            let wcOutput = '';
            wc.stdout.on('data', (piece) => wcOutput += piece);
            wc.on('close', () => {
              console.log("En el fichero: " + filename);
              const wcOutputAsArray = wcOutput.split(/\s+/);
              console.log(`${wcOutputAsArray[1]} lines`);
              console.log(`${wcOutputAsArray[2]} words`);
              console.log(`${wcOutputAsArray[3]} characters`);
              console.log();
            });
          }
        });
      } else {
        console.log('No existe un directorio con ese nombre.');
      }
    }
  },
});

/**
 * @brief Displays the file that contains more characters on the screen.
 */
yargs.command({
  command: 'bigFile',
  describe: 'Displays the file that contains more characters on the screen.',
  builder: {
    directory: {
      describe: 'Directory name',
      demandOption: true,
      type: 'string',
    },
  },
  /**
   * 
   * @param argv Directory passed by command line
   */
  handler(argv: { directory: string; }) {
    if (typeof argv.directory === 'string') {
      const path: string = './prueba/' + argv.directory;
      if (fs.existsSync(path)) {
        const pointer = fs.readdirSync(path);
        let myFile: string = '';
        pointer.forEach((filename) => {
          const filePath: string = path + '/' + filename;
          if(fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            const wc = spawn('wc', [filePath]);
            let wcOutput = '';
            wc.stdout.on('data', (piece) => wcOutput += piece);
            let aux: number = 0;

            wc.on('close', () => {
              const wcOutputAsArray = wcOutput.split(/\s+/);
              let temp = parseInt(wcOutputAsArray[3]);
              if(temp >= aux){
                aux = temp;
                myFile = filename;
                //console.log(myFile);
              }
            });
          }
        });
        console.log("El fichero con más caracteres es: " + myFile);
        console.log();
      } else {
        console.log('No existe un directorio con ese nombre.');
      }
    }
  },
});

yargs.parse();
