import beads.*;
import java.util.Arrays;

AudioContext ac;

int wKeys;
int wKeysWid;
int bKeys;
int bKeysWid;

void setup() {
  size(800, 300);
  ac = new AudioContext();
}

void draw() {
   wKeys = 8;
   wKeysWid = width / wKeys;
   bKeys = 9;
   bKeysWid = width / bKeys;
  for (int i = 0; i < wKeys; i++) { 
    fill(255);
    if (mouseX > i*wKeysWid && mouseX < i*wKeysWid + wKeysWid) {
      fill(200);
    }
    rectMode(CORNER);
    rect(i*wKeysWid, 0, wKeysWid, height);
  }

  for (int i = 0; i < bKeys; i++) {
    rectMode(CENTER);
    fill(50);
    if (mouseX > i * wKeysWid - bKeysWid/2 && mouseX < i*wKeysWid+bKeysWid/2) {
      if (mouseY < height/2) {
        fill(0);
      }
    }
    if (i != 0 && i != 3 && i != 7) { //placement of black keys
      rect(i * wKeysWid, 0, bKeysWid/1.5, height);
    }
  }
}

int whichNote;
float note;
int BW;

void mouseReleased() {
  whichNote = mouseX;
  BW = mouseY; //black or white key
  playNote();
}

void playNote() {
  float harmonicityRatio = 1;  
  //assign notes  
  if(whichNote > wKeysWid - bKeysWid/2 && whichNote < wKeysWid + bKeysWid/2 && BW < height/2){
    note = 277.18; //C#
  }else if(whichNote > wKeysWid*2 - bKeysWid/2 && whichNote < wKeysWid*2 + bKeysWid/2 && BW < height/2){
    note = 311.13; //D#
  }else if(whichNote > wKeysWid*4 - bKeysWid/2 && whichNote < wKeysWid*4 + bKeysWid/2 && BW < height/2){
    note = 369.99; //F#
  }else if(whichNote > wKeysWid*5 - bKeysWid/2 && whichNote < wKeysWid*5 + bKeysWid/2 && BW < height/2){
    note = 415.3; //G#
  }else if(whichNote > wKeysWid*6 - bKeysWid/2 && whichNote < wKeysWid*6 + bKeysWid/2 && BW < height/2){
    note = 466.16; //A#
  }else if(whichNote > wKeysWid*8 - bKeysWid/2 && whichNote < wKeysWid*8 + bKeysWid/2 && BW < height/2){
    note = 554.37; //C#
  }else if(whichNote < wKeysWid){
    note = 261.63; //C
  }else if(whichNote > wKeysWid && whichNote < wKeysWid*2){
    note = 293.66; //D
  }else if(whichNote > wKeysWid*2 && whichNote < wKeysWid*3){
    note = 329.63; //E
  }else if(whichNote > wKeysWid*3 && whichNote < wKeysWid*4){
    note = 349.23; //F
  }else if(whichNote > wKeysWid*4 && whichNote < wKeysWid*5){
    note = 392.00; //G
  }else if(whichNote > wKeysWid*5 && whichNote < wKeysWid*6){
    note = 440.00; //A
  }else if(whichNote > wKeysWid*6 && whichNote < wKeysWid*7){
    note = 493.88; //B
  }else if(whichNote > wKeysWid*7 && whichNote < wKeysWid*8){
    note = 523.25; //C
  }
  
  
  Glide carrierFreq = new Glide(ac, note);
  Envelope modulationIndex = new Envelope(ac, 0.0);
  WavePlayer freqModulator = new WavePlayer(ac, note*harmonicityRatio, Buffer.SINE);

  Function function = new Function(carrierFreq, freqModulator, modulationIndex) {
    public float calculate() {
      return x[1] * (x[0] * x[2]) + x[0];
    }
  };
WavePlayer wp = new WavePlayer(ac, function, Buffer.SINE);
   Envelope env = new Envelope(ac, 0);
   env.addSegment(0.1,5);
   modulationIndex.addSegment(6.0,5);
   env.addSegment(0.1,10);
    modulationIndex.addSegment(2.0,1000);
   env.addSegment(0.1,1000);
    modulationIndex.addSegment(0.2,1000);
   env.addSegment(0.0,1000);
   modulationIndex.addSegment(0.0,100);
   Gain g = new Gain(ac, 1, env);
   
   g.addInput(wp);
   ac.out.addInput(g);

  ac.start();
}
