import Entity from "./entity";
import { PLAYER_TYPE } from "../types";

export default class Player extends Entity {
    constructor() {
        super(PLAYER_TYPE);
    }
}