/***************** 
 * Cur_Main *
 *****************/


// store info about the experiment session:
let expName = 'cur_main';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(assignConditionRoutineBegin());
flowScheduler.add(assignConditionRoutineEachFrame());
flowScheduler.add(assignConditionRoutineEnd());
const Loop_ALoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Loop_ALoopBegin(Loop_ALoopScheduler));
flowScheduler.add(Loop_ALoopScheduler);
flowScheduler.add(Loop_ALoopEnd);











const Loop_BLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Loop_BLoopBegin(Loop_BLoopScheduler));
flowScheduler.add(Loop_BLoopScheduler);
flowScheduler.add(Loop_BLoopEnd);













flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'testikkkH.xlsx', 'path': 'testikkkH.xlsx'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'testikkkH.xlsx', 'path': 'testikkkH.xlsx'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'green_moon.png', 'path': 'green_moon.png'},
    {'name': 'red_moon.png', 'path': 'red_moon.png'},
    {'name': 'g_moon.png', 'path': 'g_moon.png'},
    {'name': 'rockett.png', 'path': 'rockett.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var assignConditionClock;
var participant_num;
var nReps_A;
var nReps_B;
var instmoonClock;
var text_5;
var key_resp_4;
var moon_testClock;
var rocketSpeed;
var rocketStartY;
var rocketSize;
var moonSize;
var rocketHalf;
var moonHalf;
var moon_green;
var moon_red;
var moon_testt;
var rocket_2;
var keyboard_space_2;
var feedbackClock;
var feedback_text;
var key_resp;
var text;
var in_2Clock;
var text_6;
var key_resp_5;
var moonconnClock;
var moon_greenn;
var moon_redd;
var moon;
var rocket;
var keyboard_space;
var instr_flightClock;
var text_7;
var key_resp_6;
var example_testClock;
var text_9;
var rocket_example_3;
var key_resp_7;
var endText_2;
var JUSTFLIGHT_testClock;
var text_10;
var rockett_2;
var spaceKey_2;
var feedbackkClock;
var text_2;
var next;
var key_resp_2;
var exampleClock;
var text_3;
var rocket_example;
var key_resp_3;
var endText;
var JUSTFLIGHTClock;
var text_4;
var rockett;
var spaceKey;
var byeClock;
var text_8;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "assignCondition"
  assignConditionClock = new util.Clock();
  // Run 'Begin Experiment' code from code_7
  participant_num = Number.parseInt(expInfo["participant"]);
  if (((participant_num % 2) === 0)) {
      expInfo["condition"] = "A";
  } else {
      expInfo["condition"] = "B";
  }
  if ((expInfo["condition"] === "A")) {
      nReps_A = 1;
      nReps_B = 0;
  } else {
      nReps_A = 0;
      nReps_B = 1;
  }
  expInfo["nReps_A"] = nReps_A;
  expInfo["nReps_B"] = nReps_B;
  psychoJS.experiment.addData("condition", expInfo["condition"]);
  
  // Initialize components for Routine "instmoon"
  instmoonClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Добро пожаловать, капитан!\n\nВаша сегодняшняя задача - совершить ряд пилотируемых полетов на Луну. Чтобы полет увенчался успехом, необходимо посадить ракету на Луну целиком. В случае, если хотя бы края ракеты окажутся за границами Луны, полет будет провален. При каждом успешном полете Луна окрасится в зеленый цвет, при промахе — в красный.\n\nКогда вы нажмете пробел, ракета начнет двигаться с одинаковой скоростью.\nЧтобы она остановилась, нажмите пробел еще раз.\nВнимание! Пока ракета находится в полете, она невидима.\nДавайте потренируемся. Нажмите стрелку вправо на клавиатуре, чтобы начать.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "moon_test"
  moon_testClock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  rocketSpeed = 200;
  rocketStartY = -400;
  
  rocketSize = 70;
  moonSize = 120;
  
  rocketHalf = rocketSize / 2;
  moonHalf = moonSize / 2;
          
  moon_green = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moon_green', units : undefined, 
    image : 'green_moon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [120, 120],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  moon_red = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moon_red', units : undefined, 
    image : 'red_moon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [120, 120],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  moon_testt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moon_testt', units : undefined, 
    image : 'g_moon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [120, 120],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  rocket_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rocket_2', units : undefined, 
    image : 'rockett.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [70, 70],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  keyboard_space_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 50.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Нажмите стрелку вправо, чтобы перейти к следующему полету -->',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 100)], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "in_2"
  in_2Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Пробные задания окончены, теперь пора переходить к реальным полетам.\n\nНажмите стрелку вправо, чтобы продолжить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "moonconn"
  moonconnClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  rocketSpeed = 200;
  rocketStartY = (- 400);
  rocketSize = 70;
  moonSize = 120;
  rocketHalf = (rocketSize / 2);
  moonHalf = (moonSize / 2);
  
  moon_greenn = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moon_greenn', units : undefined, 
    image : 'green_moon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [120, 120],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  moon_redd = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moon_redd', units : undefined, 
    image : 'red_moon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [120, 120],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  moon = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moon', units : undefined, 
    image : 'g_moon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [120, 120],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  rocket = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rocket', units : undefined, 
    image : 'rockett.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [70, 70],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  keyboard_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_flight"
  instr_flightClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Добро пожаловать, капитан!\n\nСегодня вам предстоит в точности повторить полеты на ракете наших лучших пилотов. Сначала вы увидите образец полета, а затем вам нужно будет совершить полет точно такой же по длительности. Пока ракета находится в полете, она невидима. То есть полет начинается с исчезновения ракеты и заканчивается ее появлением. \n\nНажмите клавишу вправо на клавиатуре, чтобы перейти к пробным заданиям --->',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "example_test"
  example_testClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Нажмите на пробел, чтобы увидеть эталонный полет ракеты',
    font: 'Arial',
    units: undefined, 
    pos: [0, 300], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rocket_example_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rocket_example_3', units : undefined, 
    image : 'rockett.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  endText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText_2',
    text: 'Полет окончен',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 50)], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "JUSTFLIGHT_test"
  JUSTFLIGHT_testClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Теперь попробуйте повторить длительность эталонного полета ракеты. Нажмите на пробел, чтобы запустить ракету. Чтобы посадить ракету нажмите второй пробел',
    font: 'Arial',
    units: undefined, 
    pos: [0, 310], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rockett_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rockett_2', units : undefined, 
    image : 'rockett.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [70, 70],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  spaceKey_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedbackk"
  feedbackkClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  next = new visual.TextStim({
    win: psychoJS.window,
    name: 'next',
    text: 'Нажмите стрелку вправо, чтобы перейти к следующему полету -->',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 100)], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "example"
  exampleClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Нажмите на пробел, чтобы увидеть эталонный полет ракеты',
    font: 'Arial',
    units: undefined, 
    pos: [0, 300], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rocket_example = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rocket_example', units : undefined, 
    image : 'rockett.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Полет окончен',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 50)], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "JUSTFLIGHT"
  JUSTFLIGHTClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Теперь попробуйте повторить длительность эталонного полета ракеты. Нажмите на пробел, чтобы запустить ракету. Чтобы посадить ракету нажмите второй пробел',
    font: 'Arial',
    units: undefined, 
    pos: [0, 310], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rockett = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rockett', units : undefined, 
    image : 'rockett.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [70, 70],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  spaceKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Ура! Вы прошли эксперимент!\nБольшое вам спасибо)\n\nпожалуйста, подождите пока данные загрузятся. Не выключайте сайт раньше времени.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var assignConditionMaxDurationReached;
var assignConditionMaxDuration;
var assignConditionComponents;
function assignConditionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'assignCondition' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    assignConditionClock.reset();
    routineTimer.reset();
    assignConditionMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('assignCondition.started', globalClock.getTime());
    assignConditionMaxDuration = null
    // keep track of which components have finished
    assignConditionComponents = [];
    
    assignConditionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function assignConditionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'assignCondition' ---
    // get current time
    t = assignConditionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    assignConditionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function assignConditionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'assignCondition' ---
    assignConditionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('assignCondition.stopped', globalClock.getTime());
    // the Routine "assignCondition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Loop_A;
function Loop_ALoopBegin(Loop_ALoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Loop_A = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nReps_A, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Loop_A'
    });
    psychoJS.experiment.addLoop(Loop_A); // add the loop to the experiment
    currentLoop = Loop_A;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Loop_A.forEach(function() {
      snapshot = Loop_A.getSnapshot();
    
      Loop_ALoopScheduler.add(importConditions(snapshot));
      Loop_ALoopScheduler.add(instmoonRoutineBegin(snapshot));
      Loop_ALoopScheduler.add(instmoonRoutineEachFrame());
      Loop_ALoopScheduler.add(instmoonRoutineEnd(snapshot));
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      Loop_ALoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      Loop_ALoopScheduler.add(trials_3LoopScheduler);
      Loop_ALoopScheduler.add(trials_3LoopEnd);
      Loop_ALoopScheduler.add(in_2RoutineBegin(snapshot));
      Loop_ALoopScheduler.add(in_2RoutineEachFrame());
      Loop_ALoopScheduler.add(in_2RoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      Loop_ALoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      Loop_ALoopScheduler.add(trialsLoopScheduler);
      Loop_ALoopScheduler.add(trialsLoopEnd);
      Loop_ALoopScheduler.add(Loop_ALoopEndIteration(Loop_ALoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'testikkkH.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(moon_testRoutineBegin(snapshot));
      trials_3LoopScheduler.add(moon_testRoutineEachFrame());
      trials_3LoopScheduler.add(moon_testRoutineEnd(snapshot));
      trials_3LoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_3LoopScheduler.add(feedbackRoutineEachFrame());
      trials_3LoopScheduler.add(feedbackRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 15, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(moonconnRoutineBegin(snapshot));
      trialsLoopScheduler.add(moonconnRoutineEachFrame());
      trialsLoopScheduler.add(moonconnRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Loop_ALoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Loop_A);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Loop_ALoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Loop_B;
function Loop_BLoopBegin(Loop_BLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Loop_B = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nReps_B, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Loop_B'
    });
    psychoJS.experiment.addLoop(Loop_B); // add the loop to the experiment
    currentLoop = Loop_B;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Loop_B.forEach(function() {
      snapshot = Loop_B.getSnapshot();
    
      Loop_BLoopScheduler.add(importConditions(snapshot));
      Loop_BLoopScheduler.add(instr_flightRoutineBegin(snapshot));
      Loop_BLoopScheduler.add(instr_flightRoutineEachFrame());
      Loop_BLoopScheduler.add(instr_flightRoutineEnd(snapshot));
      const trials_5LoopScheduler = new Scheduler(psychoJS);
      Loop_BLoopScheduler.add(trials_5LoopBegin(trials_5LoopScheduler, snapshot));
      Loop_BLoopScheduler.add(trials_5LoopScheduler);
      Loop_BLoopScheduler.add(trials_5LoopEnd);
      Loop_BLoopScheduler.add(in_2RoutineBegin(snapshot));
      Loop_BLoopScheduler.add(in_2RoutineEachFrame());
      Loop_BLoopScheduler.add(in_2RoutineEnd(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      Loop_BLoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      Loop_BLoopScheduler.add(trials_2LoopScheduler);
      Loop_BLoopScheduler.add(trials_2LoopEnd);
      Loop_BLoopScheduler.add(Loop_BLoopEndIteration(Loop_BLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'testikkkH.xlsx',
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_5.forEach(function() {
      snapshot = trials_5.getSnapshot();
    
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(example_testRoutineBegin(snapshot));
      trials_5LoopScheduler.add(example_testRoutineEachFrame());
      trials_5LoopScheduler.add(example_testRoutineEnd(snapshot));
      trials_5LoopScheduler.add(JUSTFLIGHT_testRoutineBegin(snapshot));
      trials_5LoopScheduler.add(JUSTFLIGHT_testRoutineEachFrame());
      trials_5LoopScheduler.add(JUSTFLIGHT_testRoutineEnd(snapshot));
      trials_5LoopScheduler.add(feedbackkRoutineBegin(snapshot));
      trials_5LoopScheduler.add(feedbackkRoutineEachFrame());
      trials_5LoopScheduler.add(feedbackkRoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 15, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(exampleRoutineBegin(snapshot));
      trials_2LoopScheduler.add(exampleRoutineEachFrame());
      trials_2LoopScheduler.add(exampleRoutineEnd(snapshot));
      trials_2LoopScheduler.add(JUSTFLIGHTRoutineBegin(snapshot));
      trials_2LoopScheduler.add(JUSTFLIGHTRoutineEachFrame());
      trials_2LoopScheduler.add(JUSTFLIGHTRoutineEnd(snapshot));
      trials_2LoopScheduler.add(feedbackkRoutineBegin(snapshot));
      trials_2LoopScheduler.add(feedbackkRoutineEachFrame());
      trials_2LoopScheduler.add(feedbackkRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Loop_BLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Loop_B);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Loop_BLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instmoonMaxDurationReached;
var _key_resp_4_allKeys;
var instmoonMaxDuration;
var instmoonComponents;
function instmoonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instmoon' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instmoonClock.reset();
    routineTimer.reset();
    instmoonMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('instmoon.started', globalClock.getTime());
    instmoonMaxDuration = null
    // keep track of which components have finished
    instmoonComponents = [];
    instmoonComponents.push(text_5);
    instmoonComponents.push(key_resp_4);
    
    instmoonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instmoonRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instmoon' ---
    // get current time
    t = instmoonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_4.clock.reset();
      key_resp_4.start();
      key_resp_4.clearEvents();
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: 'right', waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instmoonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instmoonRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instmoon' ---
    instmoonComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instmoon.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "instmoon" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var moon_testMaxDurationReached;
var movementStarted;
var movementStopped;
var rocketMoving;
var startMoveTime;
var stopMoveTime;
var flightDuration;
var moveClock;
var stopClock;
var rocketCenterY;
var distancePixels;
var moonY;
var moonCenterY;
var feedbackMessage;
var hit;
var errorSeconds;
var errorPixels;
var waitingAfterStop;
var pressCount;
var _keyboard_space_2_allKeys;
var moon_testMaxDuration;
var moon_testComponents;
function moon_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'moon_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    moon_testClock.reset();
    routineTimer.reset();
    moon_testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    rocket_2.pos = [0, rocketStartY];
    rocket_2.setOpacity(1);
    movementStarted = false;
    movementStopped = false;
    rocketMoving = false;
    
    startMoveTime = null;
    stopMoveTime = null;
    
    flightDuration = null;
    
    moveClock = new util.Clock();
    stopClock = new util.Clock();
    
    
    // ПОЗИЦИЯ РАКЕТЫ
    rocketCenterY = rocketStartY;
    
    // ЛУНА
    distancePixels = rocketSpeed * testik_time;
    
    moonY = rocketStartY + distancePixels;
    
    moon_testt.pos = [0, moonY];
    moon_green.pos = [0, moonY];
    moon_red.pos = [0, moonY];
    
    // СОХРАНЯЕМ ЦЕНТР ЛУНЫ
    moonCenterY = moonY;
    
    // ЦВЕТ ЛУНЫ
    moon_testt.opacity = 1;
    moon_green.opacity = 0;
    moon_red.opacity = 0;
    
    feedbackMessage = "";
    
    hit = 0;
    
    errorSeconds = 0;
    errorPixels = 0;
    
    waitingAfterStop = false;
    
    // ОЧИЩАЕМ СТАРЫЕ НАЖАТИЯ
    psychoJS.eventManager.clearEvents();
    
    pressCount = 0;
    
    moon_green.setPos([0, moonY]);
    moon_red.setPos([0, moonY]);
    moon_testt.setPos([0, moonY]);
    rocket_2.setPos([0, (- 400)]);
    keyboard_space_2.keys = undefined;
    keyboard_space_2.rt = undefined;
    _keyboard_space_2_allKeys = [];
    psychoJS.experiment.addData('moon_test.started', globalClock.getTime());
    moon_testMaxDuration = null
    // keep track of which components have finished
    moon_testComponents = [];
    moon_testComponents.push(moon_green);
    moon_testComponents.push(moon_red);
    moon_testComponents.push(moon_testt);
    moon_testComponents.push(rocket_2);
    moon_testComponents.push(keyboard_space_2);
    
    moon_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var keys;
var elapsed;
function moon_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'moon_test' ---
    // get current time
    t = moon_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_4
    keys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // ======================================
    // ПЕРВОЕ НАЖАТИЕ
    // ======================================
    
    if ((keys.length > 0) && (!movementStarted)) {
    
        movementStarted = true;
        rocketMoving = true;
    
        rocket_2.setOpacity(0);
    
        moveClock.reset();
    
        // ВАЖНО:
        psychoJS.eventManager.clearEvents();
    }
    
    
    // ======================================
    // ВТОРОЕ НАЖАТИЕ
    // ======================================
    
    else if ((keys.length > 0) && movementStarted && (!movementStopped)) {
    
        movementStopped = true;
    
        rocketMoving = false;
    
        rocket_2.setOpacity(1);
    
        flightDuration = moveClock.getTime();
    
        // ======================================
        // ГРАНИЦЫ
        // ======================================
    
    
        let rocketCenterY = rocket_2.pos[1];
        let moonCenterY = moon_testt.pos[1];
    
        let rocketTop = rocketCenterY + rocketHalf;
        let rocketBottom = rocketCenterY - rocketHalf;
    
        let moonTop = moonCenterY + moonHalf;
        let moonBottom = moonCenterY - moonHalf;
    
        // ======================================
        // ПРОВЕРКА ПОПАДАНИЯ
        // ======================================
    
        if ((rocketTop <= moonTop) && (rocketBottom >= moonBottom)) {
    
            feedbackMessage = "Получилось!";
    
            hit = 1;
    
            moon_testt.opacity = 0;
            moon_green.opacity = 1;
            moon_red.opacity = 0; 
    
        } else if (rocketCenterY > moonCenterY) {
    
            feedbackMessage = "Перелет";
    
            hit = 0;
    
            moon_testt.opacity = 0;
            moon_green.opacity = 0;
            moon_red.opacity = 1; 
    
        } else {
    
            feedbackMessage = "Недолет";
    
            hit = 0;
            moon_testt.opacity = 0;
            moon_green.opacity = 0;
            moon_red.opacity = 1; 
        }
    
        // ======================================
        // ОШИБКИ
        // ======================================
    
        errorSeconds = flightDuration - testik_time;
    
        errorPixels = rocketCenterY - moonCenterY;
    
        waitingAfterStop = true;
    
        stopClock.reset();
    
        psychoJS.eventManager.clearEvents();
    }
    
    
    // ======================================
    // ДВИЖЕНИЕ РАКЕТЫ
    // ======================================
    
    if (rocketMoving) {
    
        elapsed = moveClock.getTime();
    
        // ВАЖНО:
        rocketCenterY = rocketStartY + (rocketSpeed * elapsed);
    
        rocket_2.pos = [0, rocketCenterY];
    }
    
    
    // ======================================
    // ЗАДЕРЖКА ПЕРЕД КОНЦОМ ROUTINE
    // ======================================
    
    if (waitingAfterStop) {
    
        if (stopClock.getTime() >= 0.5) {
    
            continueRoutine = false;
        }
    }
    
    // *moon_green* updates
    if (t >= 0.0 && moon_green.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moon_green.tStart = t;  // (not accounting for frame time here)
      moon_green.frameNStart = frameN;  // exact frame index
      
      moon_green.setAutoDraw(true);
    }
    
    
    // if moon_green is active this frame...
    if (moon_green.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *moon_red* updates
    if (t >= 0.0 && moon_red.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moon_red.tStart = t;  // (not accounting for frame time here)
      moon_red.frameNStart = frameN;  // exact frame index
      
      moon_red.setAutoDraw(true);
    }
    
    
    // if moon_red is active this frame...
    if (moon_red.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *moon_testt* updates
    if (t >= 0.0 && moon_testt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moon_testt.tStart = t;  // (not accounting for frame time here)
      moon_testt.frameNStart = frameN;  // exact frame index
      
      moon_testt.setAutoDraw(true);
    }
    
    
    // if moon_testt is active this frame...
    if (moon_testt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rocket_2* updates
    if (t >= 0.0 && rocket_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rocket_2.tStart = t;  // (not accounting for frame time here)
      rocket_2.frameNStart = frameN;  // exact frame index
      
      rocket_2.setAutoDraw(true);
    }
    
    
    // if rocket_2 is active this frame...
    if (rocket_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *keyboard_space_2* updates
    if (t >= 0.0 && keyboard_space_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyboard_space_2.tStart = t;  // (not accounting for frame time here)
      keyboard_space_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyboard_space_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyboard_space_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyboard_space_2.clearEvents(); });
    }
    
    // if keyboard_space_2 is active this frame...
    if (keyboard_space_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyboard_space_2.getKeys({keyList: 'space', waitRelease: false});
      _keyboard_space_2_allKeys = _keyboard_space_2_allKeys.concat(theseKeys);
      if (_keyboard_space_2_allKeys.length > 0) {
        keyboard_space_2.keys = _keyboard_space_2_allKeys.map((key) => key.name);  // storing all keys
        keyboard_space_2.rt = _keyboard_space_2_allKeys.map((key) => key.rt);
        keyboard_space_2.duration = _keyboard_space_2_allKeys.map((key) => key.duration);
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    moon_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function moon_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'moon_test' ---
    moon_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('moon_test.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    psychoJS.experiment.addData("test_time", testik_time);
    
    psychoJS.experiment.addData("actualFlightTime_test", flightDuration);
    
    psychoJS.experiment.addData("hit_test", hit);
    
    psychoJS.experiment.addData("feedback_test_moon", feedbackMessage);
    
    psychoJS.experiment.addData("errorSeconds_test", errorSeconds);
    
    psychoJS.experiment.addData("errorPixels_test", errorPixels);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyboard_space_2.corr, level);
    }
    psychoJS.experiment.addData('keyboard_space_2.keys', keyboard_space_2.keys);
    if (typeof keyboard_space_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyboard_space_2.rt', keyboard_space_2.rt);
        psychoJS.experiment.addData('keyboard_space_2.duration', keyboard_space_2.duration);
        }
    
    keyboard_space_2.stop();
    // the Routine "moon_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var _key_resp_allKeys;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    feedback_text.setText(feedbackMessage);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    feedbackComponents.push(key_resp);
    feedbackComponents.push(text);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'right', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var in_2MaxDurationReached;
var _key_resp_5_allKeys;
var in_2MaxDuration;
var in_2Components;
function in_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'in_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    in_2Clock.reset();
    routineTimer.reset();
    in_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('in_2.started', globalClock.getTime());
    in_2MaxDuration = null
    // keep track of which components have finished
    in_2Components = [];
    in_2Components.push(text_6);
    in_2Components.push(key_resp_5);
    
    in_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function in_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'in_2' ---
    // get current time
    t = in_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // if text_6 is active this frame...
    if (text_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: 'right', waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    in_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function in_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'in_2' ---
    in_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('in_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "in_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var moonconnMaxDurationReached;
var _keyboard_space_allKeys;
var moonconnMaxDuration;
var moonconnComponents;
function moonconnRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'moonconn' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    moonconnClock.reset();
    routineTimer.reset();
    moonconnMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    rocket.pos = [0, rocketStartY];
    rocket.opacity = 1;
    movementStarted = false;
    movementStopped = false;
    rocketMoving = false;
    
    startMoveTime = null;
    stopMoveTime = null;
    
    flightDuration = null;
    
    moveClock = new util.Clock();
    stopClock = new util.Clock();
    
    distancePixels = (rocketSpeed * target_time);
    moonY = (rocketStartY + distancePixels);
    
    // позиция лун
    moon.pos = [0, moonY];
    moon_greenn.pos = [0, moonY];
    moon_redd.pos = [0, moonY];
    // ЦВЕТ ЛУНЫ
    moon.opacity = 1;
    moon_greenn.opacity = 0;
    moon_redd.opacity = 0;
    
    feedbackMessage = "";
    hit = 0;
    errorSeconds = 0;
    errorPixels = 0;
    waitingAfterStop = false;
    
    
    // ОЧИЩАЕМ СТАРЫЕ НАЖАТИЯ
    psychoJS.eventManager.clearEvents();
    
    pressCount = 0;
    
    moon_greenn.setPos([0, moonY]);
    moon_redd.setPos([0, moonY]);
    moon.setPos([0, moonY]);
    rocket.setPos([0, (- 400)]);
    keyboard_space.keys = undefined;
    keyboard_space.rt = undefined;
    _keyboard_space_allKeys = [];
    psychoJS.experiment.addData('moonconn.started', globalClock.getTime());
    moonconnMaxDuration = null
    // keep track of which components have finished
    moonconnComponents = [];
    moonconnComponents.push(moon_greenn);
    moonconnComponents.push(moon_redd);
    moonconnComponents.push(moon);
    moonconnComponents.push(rocket);
    moonconnComponents.push(keyboard_space);
    
    moonconnComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var newY;
function moonconnRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'moonconn' ---
    // get current time
    t = moonconnClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    keys = psychoJS.eventManager.getKeys({keyList:['space']});
    if (((keys.length > 0) && (! movementStarted))) {
        movementStarted = true;
        rocketMoving = true;
        rocket.opacity = 0;
        moveClock.reset();
    } else {
        if ((((keys.length > 0) && movementStarted) && (! movementStopped))) {
            movementStopped = true;
            rocketMoving = false;
            rocket.opacity = 1;
            flightDuration = moveClock.getTime();
        let rocketCenterY = rocket.pos[1];
        let moonCenterY = moon.pos[1];
    
        let rocketTop = rocketCenterY + rocketHalf;
        let rocketBottom = rocketCenterY - rocketHalf;
    
        let moonTop = moonCenterY + moonHalf;
        let moonBottom = moonCenterY - moonHalf;
            if (((rocketTop <= moonTop) && (rocketBottom >= moonBottom))) {
                feedbackMessage = "\u041f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c!";
                hit = 1;
    // ЦВЕТ ЛУНЫ
                moon.opacity = 0;
                moon_greenn.opacity = 1;
                moon_redd.opacity = 0;
            } else {
                if ((rocketCenterY > moonCenterY)) {
                    feedbackMessage = "\u041f\u0435\u0440\u0435\u043b\u0435\u0442";
    // ЦВЕТ ЛУНЫ
                moon.opacity = 0;
                moon_greenn.opacity = 0;
                moon_redd.opacity = 1;
                } else {
                    feedbackMessage = "\u041d\u0435\u0434\u043e\u043b\u0435\u0442";
                    hit = 0;
                moon.opacity = 0;
                moon_greenn.opacity = 0;
                moon_redd.opacity = 1;
                }
            }
            errorSeconds = (flightDuration - target_time);
            errorPixels = (rocketCenterY - moonCenterY);
            waitingAfterStop = true;
            stopClock.reset();
        }
    }
    if (rocketMoving) {
        elapsed = moveClock.getTime();
        newY = (rocketStartY + (rocketSpeed * elapsed));
        rocket.pos = [0, newY];
    }
    if (waitingAfterStop) {
        if ((stopClock.getTime() >= 0.5)) {
            continueRoutine = false;
        }
    }
    
    
    // *moon_greenn* updates
    if (t >= 0.0 && moon_greenn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moon_greenn.tStart = t;  // (not accounting for frame time here)
      moon_greenn.frameNStart = frameN;  // exact frame index
      
      moon_greenn.setAutoDraw(true);
    }
    
    
    // if moon_greenn is active this frame...
    if (moon_greenn.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *moon_redd* updates
    if (t >= 0.0 && moon_redd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moon_redd.tStart = t;  // (not accounting for frame time here)
      moon_redd.frameNStart = frameN;  // exact frame index
      
      moon_redd.setAutoDraw(true);
    }
    
    
    // if moon_redd is active this frame...
    if (moon_redd.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *moon* updates
    if (t >= 0.0 && moon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moon.tStart = t;  // (not accounting for frame time here)
      moon.frameNStart = frameN;  // exact frame index
      
      moon.setAutoDraw(true);
    }
    
    
    // if moon is active this frame...
    if (moon.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rocket* updates
    if (t >= 0.0 && rocket.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rocket.tStart = t;  // (not accounting for frame time here)
      rocket.frameNStart = frameN;  // exact frame index
      
      rocket.setAutoDraw(true);
    }
    
    
    // if rocket is active this frame...
    if (rocket.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *keyboard_space* updates
    if (t >= 0.0 && keyboard_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyboard_space.tStart = t;  // (not accounting for frame time here)
      keyboard_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyboard_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyboard_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyboard_space.clearEvents(); });
    }
    
    // if keyboard_space is active this frame...
    if (keyboard_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyboard_space.getKeys({keyList: 'space', waitRelease: false});
      _keyboard_space_allKeys = _keyboard_space_allKeys.concat(theseKeys);
      if (_keyboard_space_allKeys.length > 0) {
        keyboard_space.keys = _keyboard_space_allKeys.map((key) => key.name);  // storing all keys
        keyboard_space.rt = _keyboard_space_allKeys.map((key) => key.rt);
        keyboard_space.duration = _keyboard_space_allKeys.map((key) => key.duration);
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    moonconnComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function moonconnRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'moonconn' ---
    moonconnComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('moonconn.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    psychoJS.experiment.addData("target_time_moon", target_time);
    psychoJS.experiment.addData("actualFlightTime_moon", flightDuration);
    psychoJS.experiment.addData("deviation_moon", errorSeconds);
    psychoJS.experiment.addData("hit_moon", hit);
    psychoJS.experiment.addData("feedback_moon", feedbackMessage);
    psychoJS.experiment.addData("errorPixels_moon", errorPixels);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyboard_space.corr, level);
    }
    psychoJS.experiment.addData('keyboard_space.keys', keyboard_space.keys);
    if (typeof keyboard_space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyboard_space.rt', keyboard_space.rt);
        psychoJS.experiment.addData('keyboard_space.duration', keyboard_space.duration);
        }
    
    keyboard_space.stop();
    // the Routine "moonconn" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_flightMaxDurationReached;
var _key_resp_6_allKeys;
var instr_flightMaxDuration;
var instr_flightComponents;
function instr_flightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_flight' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_flightClock.reset();
    routineTimer.reset();
    instr_flightMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('instr_flight.started', globalClock.getTime());
    instr_flightMaxDuration = null
    // keep track of which components have finished
    instr_flightComponents = [];
    instr_flightComponents.push(text_7);
    instr_flightComponents.push(key_resp_6);
    
    instr_flightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_flightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_flight' ---
    // get current time
    t = instr_flightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // if text_7 is active this frame...
    if (text_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: 'right', waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_flightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_flightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_flight' ---
    instr_flightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_flight.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "instr_flight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var example_testMaxDurationReached;
var phase;
var finishTime;
var _key_resp_7_allKeys;
var example_testMaxDuration;
var example_testComponents;
function example_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'example_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    example_testClock.reset();
    routineTimer.reset();
    example_testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    rocket_example_3.opacity = 1;
    endText_2.opacity = 0;
    phase = "waiting";
    finishTime = null;
    
    rocket_example_3.setSize([70, 70]);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('example_test.started', globalClock.getTime());
    example_testMaxDuration = null
    // keep track of which components have finished
    example_testComponents = [];
    example_testComponents.push(text_9);
    example_testComponents.push(rocket_example_3);
    example_testComponents.push(key_resp_7);
    example_testComponents.push(endText_2);
    
    example_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var disappearTime;
function example_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'example_test' ---
    // get current time
    t = example_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_5
    if ((phase === "waiting")) {
        if (key_resp_7.keys) {
            rocket_example_3.opacity = 0;
            disappearTime = (t + testik_time);
            phase = "hidden";
        }
    } else {
        if ((phase === "hidden")) {
            if ((t >= disappearTime)) {
                rocket_example_3.opacity = 1;
                endText_2.opacity = 1;
                finishTime = (t + 1);
                phase = "finished";
            }
        } else {
            if ((phase === "finished")) {
                if ((t >= finishTime)) {
                    continueRoutine = false;
                }
            }
        }
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // if text_9 is active this frame...
    if (text_9.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rocket_example_3* updates
    if (t >= 0.0 && rocket_example_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rocket_example_3.tStart = t;  // (not accounting for frame time here)
      rocket_example_3.frameNStart = frameN;  // exact frame index
      
      rocket_example_3.setAutoDraw(true);
    }
    
    
    // if rocket_example_3 is active this frame...
    if (rocket_example_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    // if key_resp_7 is active this frame...
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
      }
    }
    
    
    // *endText_2* updates
    if (t >= 0.0 && endText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText_2.tStart = t;  // (not accounting for frame time here)
      endText_2.frameNStart = frameN;  // exact frame index
      
      endText_2.setAutoDraw(true);
    }
    
    
    // if endText_2 is active this frame...
    if (endText_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    example_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function example_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'example_test' ---
    example_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('example_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        }
    
    key_resp_7.stop();
    // the Routine "example_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var JUSTFLIGHT_testMaxDurationReached;
var firstPress;
var measuredTime;
var deviation;
var feedbackText;
var timerClock;
var _spaceKey_2_allKeys;
var JUSTFLIGHT_testMaxDuration;
var JUSTFLIGHT_testComponents;
function JUSTFLIGHT_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'JUSTFLIGHT_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    JUSTFLIGHT_testClock.reset();
    routineTimer.reset();
    JUSTFLIGHT_testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    firstPress = false;
    measuredTime = null;
    deviation = null;
    feedbackText = "";
    rockett_2.opacity = 1;
    timerClock = new util.Clock();
    pressCount = 0;
    rockett_2.setOpacity(1);
    
    psychoJS.eventManager.getKeys({keyList:['space']});
    
    rockett_2.setOpacity(1);
    spaceKey_2.keys = undefined;
    spaceKey_2.rt = undefined;
    _spaceKey_2_allKeys = [];
    psychoJS.experiment.addData('JUSTFLIGHT_test.started', globalClock.getTime());
    JUSTFLIGHT_testMaxDuration = null
    // keep track of which components have finished
    JUSTFLIGHT_testComponents = [];
    JUSTFLIGHT_testComponents.push(text_10);
    JUSTFLIGHT_testComponents.push(rockett_2);
    JUSTFLIGHT_testComponents.push(spaceKey_2);
    
    JUSTFLIGHT_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function JUSTFLIGHT_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'JUSTFLIGHT_test' ---
    // get current time
    t = JUSTFLIGHT_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_6
    keys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    if (keys.length > 0)  {
        pressCount += 1;
        if ((pressCount === 1)) {
            rockett_2.setOpacity(0);
            timerClock.reset();
        } else {
            if ((pressCount === 2)) {
                measuredTime = timerClock.getTime();
                rockett_2.setOpacity(1);
                deviation = (measuredTime - testik_time);
                if ((measuredTime > (testik_time + 0.083))) {
                    feedbackText = "\u043f\u0435\u0440\u0435\u043b\u0435\u0442";
                } else {
                    if ((measuredTime < (testik_time - 0.083))) {
                        feedbackText = "\u043d\u0435\u0434\u043e\u043b\u0435\u0442";
                    } else {
                        feedbackText = "\u041f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c!";
                    }
                }
                psychoJS.experiment.addData("measuredTime_test", measuredTime);
                psychoJS.experiment.addData("deviation_test", deviation);
                psychoJS.experiment.addData("feedback_test", feedbackText);
                continueRoutine = false;
            }
        }
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // if text_10 is active this frame...
    if (text_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rockett_2* updates
    if (t >= 0.0 && rockett_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rockett_2.tStart = t;  // (not accounting for frame time here)
      rockett_2.frameNStart = frameN;  // exact frame index
      
      rockett_2.setAutoDraw(true);
    }
    
    
    // if rockett_2 is active this frame...
    if (rockett_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *spaceKey_2* updates
    if (t >= 0.0 && spaceKey_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceKey_2.tStart = t;  // (not accounting for frame time here)
      spaceKey_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceKey_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceKey_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceKey_2.clearEvents(); });
    }
    
    // if spaceKey_2 is active this frame...
    if (spaceKey_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceKey_2.getKeys({keyList: 'space', waitRelease: false});
      _spaceKey_2_allKeys = _spaceKey_2_allKeys.concat(theseKeys);
      if (_spaceKey_2_allKeys.length > 0) {
        spaceKey_2.keys = _spaceKey_2_allKeys.map((key) => key.name);  // storing all keys
        spaceKey_2.rt = _spaceKey_2_allKeys.map((key) => key.rt);
        spaceKey_2.duration = _spaceKey_2_allKeys.map((key) => key.duration);
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    JUSTFLIGHT_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function JUSTFLIGHT_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'JUSTFLIGHT_test' ---
    JUSTFLIGHT_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('JUSTFLIGHT_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spaceKey_2.corr, level);
    }
    psychoJS.experiment.addData('spaceKey_2.keys', spaceKey_2.keys);
    if (typeof spaceKey_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spaceKey_2.rt', spaceKey_2.rt);
        psychoJS.experiment.addData('spaceKey_2.duration', spaceKey_2.duration);
        }
    
    spaceKey_2.stop();
    // the Routine "JUSTFLIGHT_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackkMaxDurationReached;
var _key_resp_2_allKeys;
var feedbackkMaxDuration;
var feedbackkComponents;
function feedbackkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedbackk' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackkClock.reset();
    routineTimer.reset();
    feedbackkMaxDurationReached = false;
    // update component parameters for each repeat
    text_2.setText(feedbackText);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('feedbackk.started', globalClock.getTime());
    feedbackkMaxDuration = null
    // keep track of which components have finished
    feedbackkComponents = [];
    feedbackkComponents.push(text_2);
    feedbackkComponents.push(next);
    feedbackkComponents.push(key_resp_2);
    
    feedbackkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedbackk' ---
    // get current time
    t = feedbackkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *next* updates
    if (t >= 0.0 && next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next.tStart = t;  // (not accounting for frame time here)
      next.frameNStart = frameN;  // exact frame index
      
      next.setAutoDraw(true);
    }
    
    
    // if next is active this frame...
    if (next.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: 'right', waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedbackk' ---
    feedbackkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedbackk.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "feedbackk" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exampleMaxDurationReached;
var _key_resp_3_allKeys;
var exampleMaxDuration;
var exampleComponents;
function exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'example' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exampleClock.reset();
    routineTimer.reset();
    exampleMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    rocket_example.opacity = 1;
    endText.opacity = 0;
    phase = "waiting";
    finishTime = null;
    
    rocket_example.setSize([70, 70]);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('example.started', globalClock.getTime());
    exampleMaxDuration = null
    // keep track of which components have finished
    exampleComponents = [];
    exampleComponents.push(text_3);
    exampleComponents.push(rocket_example);
    exampleComponents.push(key_resp_3);
    exampleComponents.push(endText);
    
    exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'example' ---
    // get current time
    t = exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    if ((phase === "waiting")) {
        if (key_resp_3.keys) {
            rocket_example.opacity = 0;
            disappearTime = (t + target_time);
            phase = "hidden";
        }
    } else {
        if ((phase === "hidden")) {
            if ((t >= disappearTime)) {
                rocket_example.opacity = 1;
                endText.opacity = 1;
                finishTime = (t + 1);
                phase = "finished";
            }
        } else {
            if ((phase === "finished")) {
                if ((t >= finishTime)) {
                    continueRoutine = false;
                }
            }
        }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rocket_example* updates
    if (t >= 0.0 && rocket_example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rocket_example.tStart = t;  // (not accounting for frame time here)
      rocket_example.frameNStart = frameN;  // exact frame index
      
      rocket_example.setAutoDraw(true);
    }
    
    
    // if rocket_example is active this frame...
    if (rocket_example.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
      }
    }
    
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }
    
    
    // if endText is active this frame...
    if (endText.status === PsychoJS.Status.STARTED) {
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'example' ---
    exampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('example.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        }
    
    key_resp_3.stop();
    // the Routine "example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var JUSTFLIGHTMaxDurationReached;
var _spaceKey_allKeys;
var JUSTFLIGHTMaxDuration;
var JUSTFLIGHTComponents;
function JUSTFLIGHTRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'JUSTFLIGHT' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    JUSTFLIGHTClock.reset();
    routineTimer.reset();
    JUSTFLIGHTMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    firstPress = false;
    measuredTime = null;
    deviation = null;
    feedbackText = "";
    rockett.opacity = 1;
    timerClock = new util.Clock();
    pressCount = 0;
    psychoJS.eventManager.getKeys({keyList:['space']});
    spaceKey.keys = undefined;
    spaceKey.rt = undefined;
    _spaceKey_allKeys = [];
    psychoJS.experiment.addData('JUSTFLIGHT.started', globalClock.getTime());
    JUSTFLIGHTMaxDuration = null
    // keep track of which components have finished
    JUSTFLIGHTComponents = [];
    JUSTFLIGHTComponents.push(text_4);
    JUSTFLIGHTComponents.push(rockett);
    JUSTFLIGHTComponents.push(spaceKey);
    
    JUSTFLIGHTComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function JUSTFLIGHTRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'JUSTFLIGHT' ---
    // get current time
    t = JUSTFLIGHTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    keys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    if (keys.length > 0)  {
        pressCount += 1;
        spaceKey.clearEvents();
        if ((pressCount === 1)) {
            rockett.opacity = 0;
            timerClock.reset();
        } else {
            if ((pressCount === 2)) {
                measuredTime = timerClock.getTime();
                rockett.opacity = 1;
                deviation = (measuredTime - target_time);
                if ((measuredTime > (target_time +0.083))) {
                    feedbackText = "\u043f\u0435\u0440\u0435\u043b\u0435\u0442";
                } else {
                    if ((measuredTime < (target_time - 0.083))) {
                        feedbackText = "\u043d\u0435\u0434\u043e\u043b\u0435\u0442";
                    } else {
                        feedbackText = "\u041f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c!";
                    }
                }
                psychoJS.experiment.addData("target_time_flight", target_time);
                psychoJS.experiment.addData("actualFlightTime_flight", measuredTime);
                psychoJS.experiment.addData("deviation_flight", deviation);
                psychoJS.experiment.addData("feedback_flight", feedbackText);
                continueRoutine = false;
    
            }
        }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rockett* updates
    if (t >= 0.0 && rockett.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rockett.tStart = t;  // (not accounting for frame time here)
      rockett.frameNStart = frameN;  // exact frame index
      
      rockett.setAutoDraw(true);
    }
    
    
    // if rockett is active this frame...
    if (rockett.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *spaceKey* updates
    if (t >= 0.0 && spaceKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceKey.tStart = t;  // (not accounting for frame time here)
      spaceKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceKey.clearEvents(); });
    }
    
    // if spaceKey is active this frame...
    if (spaceKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceKey.getKeys({keyList: 'space', waitRelease: false});
      _spaceKey_allKeys = _spaceKey_allKeys.concat(theseKeys);
      if (_spaceKey_allKeys.length > 0) {
        spaceKey.keys = _spaceKey_allKeys.map((key) => key.name);  // storing all keys
        spaceKey.rt = _spaceKey_allKeys.map((key) => key.rt);
        spaceKey.duration = _spaceKey_allKeys.map((key) => key.duration);
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    JUSTFLIGHTComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function JUSTFLIGHTRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'JUSTFLIGHT' ---
    JUSTFLIGHTComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('JUSTFLIGHT.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spaceKey.corr, level);
    }
    psychoJS.experiment.addData('spaceKey.keys', spaceKey.keys);
    if (typeof spaceKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spaceKey.rt', spaceKey.rt);
        psychoJS.experiment.addData('spaceKey.duration', spaceKey.duration);
        }
    
    spaceKey.stop();
    // the Routine "JUSTFLIGHT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    byeClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' +
    psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     Accept: '*/*',
     },
     body: JSON.stringify({
     experimentID: 'AmUBt8BviQ2I', // * обновить, указав experiment ID из
     filename: filename,
     data: data,
     }),
    }).then(response => response.json()).then(data => {
    // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(text_8);
    
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // if text_8 is active this frame...
    if (text_8.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_8.tStop = t;  // not accounting for scr refresh
      text_8.frameNStop = frameN;  // exact frame index
      // update status
      text_8.status = PsychoJS.Status.FINISHED;
      text_8.setAutoDraw(false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    byeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (byeMaxDurationReached) {
        byeClock.add(byeMaxDuration);
    } else {
        byeClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
