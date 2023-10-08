#!/usr/bin/env node
import { greeting, startEvenGame } from '../src/even-game.js';

const playerName = greeting();
startEvenGame(playerName);
