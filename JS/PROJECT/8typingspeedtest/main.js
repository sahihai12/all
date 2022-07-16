'use strict';

const paragraphs = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit rerum, minima nemo illum facere consequuntur rem voluptatem et nobis, molestiae magni repellat aperiam, eveniet necessitatibus aliquid ipsam delectus sint possimus voluptas. Non, necessitatibus impedit minima quibusdam nostrum quae, cumque architecto suscipit quia nobis repellat quasi maiores exercitationem dolorem voluptate.',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing..",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. ",
    "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.",
    "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).  ",
    "Imagine each paragraph as a sandwich. The real content of the sandwich—the meat or other filling is in the middle. It includes all the evidence you need to make the point. But it gets kind of messy to eat a sandwich without any bread. Your readers don’t know what to do with all the evidence you’ve given them. So, the top slice of bread (the first sentence of the paragraph) explains the topic (or controlling idea) of the paragraph.",
    "Continue the pattern of giving examples and explaining them until all points/examples that the writer deems necessary have been made and explained. NONE of your examples should be left unexplained. You might be able to explain the relationship between the example and the topic sentence in the same sentence which introduced the example. More often, however, you will need to explain that relationship in a separate sentence.",
    "Although most people consider piranhas to be quite dangerous, they are, for the most part, entirely harmless. Piranhas rarely feed on large animals; they eat smaller fish and aquatic plants. When confronted with humans, piranhas’ first instinct is to flee, not attack. Their fear of humans makes sense. Far more piranhas are eaten by people than people are eaten by piranhas. If the fish are well-fed, they won’t bite humans."
]

const wrapper = document.querySelector('.wrapper'),
    paragraph = document.querySelector('.content p'),
    input = document.querySelector('.content input'),
    tryagain = document.querySelector('.tryagain'),
    time = document.querySelector('.time p span'),
    mistake = document.querySelector('.mistake p span'),
    wpm = document.querySelector('.wpm p span');


let randomValue = Math.trunc(Math.random() * paragraphs.length);
// assign a random paragraph to content
let inputValue, charindex = 0 , correct = 0 , istyping = false, para = paragraphs[randomValue], maxtime = 10 , timer , timeLeft = maxtime;
let incorrect = document.querySelectorAll('.content p .incorrect').length;



function random_para() {
    // split paragagh into span
    para.split('').forEach(element => {
        let spantag = `<span>${element}</span>`;
        paragraph.innerHTML += spantag;
    });
    // focusing input
    // document.addEventListener('keydown', () => input.focus());
    paragraph.addEventListener('click', () => input.focus());
}

// set a time
time.innerHTML = maxtime;

// make a timer of 10s
function times() {
    if(maxtime > 0){
        maxtime--;
        time.innerHTML = maxtime;
    }else{
        clearInterval(timer);
        wrapper.addEventListener('keypress', (e)=>{
            e.preventDefault();
            return false;
        });
        input.setAttribute('disabled' , '');
        const correct = document.querySelectorAll('.content p .correct').length;
        wpm.innerHTML = correct;
    }
}

function typing() {
    const span = document.querySelectorAll('.content p span');
    let inputValue = input.value.split('')[charindex];
    span.forEach(element => {
        element.classList.remove('active');
    });
    if (!istyping) {
        timer = setInterval(times , 1000);
        istyping = true;
    }

    if (inputValue == null) {
        charindex--;
        if (span[charindex].classList.contains('incorrect')) {
            incorrect--;
            mistake.innerHTML = incorrect;
        }

        span[charindex].classList.remove('incorrect');
        span[charindex].classList.remove('correct');
    } else {
        // check if coorect or not
        if (inputValue === span[charindex].innerHTML) {
            span[charindex].classList.add('correct');
        } else {
            span[charindex].classList.add('incorrect');
            mistake.innerHTML = incorrect;
            incorrect++;
        }


        charindex++;
    }
    span[charindex].classList.add('active');
}




random_para();

input.addEventListener('input', typing);


tryagain.addEventListener('click' , ()=>{
    paragraph.innerHTML = "";
    random_para();
    wpm.innerHTML = 0;
    mistake.innerHTML = 0;
    input.removeAttribute('disabled' , '');
    input.value = "";
    input.focus()
});