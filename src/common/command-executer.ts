import { generateMicroservice } from '../commands/microservice-generator'

export class CommandExecuter {

    static exec() {
        generateMicroservice();
    }
}