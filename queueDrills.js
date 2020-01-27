const Queue = require('./queue');



//6
const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhara');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peekQ(q) {
  console.log(q.first.value);
}
// peekQ(starTrekQ);

function isEmpty(q) {
  if (!q.first) {
    return true;
  }
  return false;
}
// console.log(isEmpty(starTrekQ));

function display(q) {
  let str = '';
  let currNode = q.first;
  while (currNode !== null) {
    str += currNode.value + ', ';
    currNode = currNode.next;
  }
  console.log(str);
}
// display(starTrekQ);

//9

const dancingTeam = new Queue();
dancingTeam.enqueue({ gender: 'F', name: 'Jane' });
dancingTeam.enqueue({ gender: 'M', name: 'Frank' });
dancingTeam.enqueue({ gender: 'F', name: 'Madonna' });
dancingTeam.enqueue({ gender: 'M', name: 'David' });
dancingTeam.enqueue({ gender: 'F', name: 'Beyonce' });
dancingTeam.enqueue({ gender: 'M', name: 'Chris' });
dancingTeam.enqueue({ gender: 'M', name: 'Sherlock' });
dancingTeam.enqueue({ gender: 'M', name: 'John' });

function pairPartners(team) {
  const maleQueue = new Queue;
  const femQueue = new Queue;

  while (team.first !== null) {
    const nextUP = team.first.value;
    team.dequeue();

    if (nextUP.gender === 'F') {
      femQueue.enqueue(nextUP.name);
    } else {
      maleQueue.enqueue(nextUP.name);
    }
    if (femQueue.first !== null && maleQueue.first !== null) {
      const pairs = `${femQueue.first.value} & ${maleQueue.first.value} are paired!`;
      console.log(pairs);
      femQueue.dequeue();
      maleQueue.dequeue();
    }
  }
}
// pairPartners(dancingTeam);

//10
const bank = new Queue;
function bankQ() {
  const paperwork = Math.random() > 0.25;
  bank.enqueue(paperwork);
  const start = bank.first;
  bank.dequeue();
  if (start.value === false) {
    bank.enqueue(Math.random() > 0.25);
  }
  display(bank);
}
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();



