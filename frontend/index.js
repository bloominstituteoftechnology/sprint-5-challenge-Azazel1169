

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  
  

  async function fetchLearnersData() {
    try {
      const response = await axios.get('http://localhost:3003/api/learners');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message)
      return [];
    }
  }

  async function fetchMentorsData() {
    try {
      const response = await axios.get('http://localhost:3003/api/mentors');
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error.message);
      return [];
    }
  }

  
    
  const learnersData = await fetchLearnersData();
  const mentorsData = await fetchMentorsData();

  const learners = learnersData.map(learner => {
   
    return {
      ...learner, 
      mentors: learner.mentors.map(mentorId => {
        return mentorsData.find(mentor =>  mentor.id === mentorId)
      })
    }
  })
  
      const container = document.querySelector('.cards')
      container.innerHTML = '';
  
      let selectedCard = null;
    
  learners.forEach(learner => {
    console.log(learner);  
    const card = document.createElement('div');
    card.classList.add('card');
  
    const nameElement = document.createElement('h3');
    nameElement.textContent = `${learner.fullName}`;
    card.appendChild(nameElement)
  
    const emailElement = document.createElement('div');
    emailElement.textContent = learner.email;
    card.appendChild(emailElement)
  
    const mentorsTitle = document.createElement('h4');
    mentorsTitle.textContent = 'Mentors';
    mentorsTitle.classList.add('closed')
    card.appendChild(mentorsTitle)
  
    const mentorsList = document.createElement('ul');
    card.appendChild(mentorsList)
  
    if (learner.mentors.length > 0) {
      learner.mentors.forEach(mentor => {
        const mentorElement = document.createElement('li');
        mentorElement.textContent = `${mentor.firstName} ${mentor.lastName}`;
        mentorsList.appendChild(mentorElement);
      });
    }
  
    container.appendChild(card);
  
    // Add event listener for card selection
    card.addEventListener('click', () => {
      if (selectedCard !== null && selectedCard !== card) {
        selectedCard.classList.remove('selected');
      }
      card.classList.toggle('selected');
      selectedCard = card;
  
      const infoElement = document.querySelector('.info');
      if (card.classList.contains('selected')) {
        infoElement.textContent = `The selected learner is ${learner.fullName}`;
      } else {
        infoElement.textContent = "No learner is selected";
        selectedCard = null;
      }
    });

    

// Add the event listener
mentorsTitle.addEventListener('click', function() {
  // Clear the mentors list
  mentorsList.innerHTML = '';

  // Add each mentor to the list
  if (learner.mentors.length > 0) {
    learner.mentors.forEach(mentor => {
      const mentorItem = document.createElement('li');
      mentorItem.textContent = `${mentor.firstName} ${mentor.lastName}`;
      mentorsList.appendChild(mentorItem);
    });
  } else {
    const noMentorItem = document.createElement('li');
    noMentorItem.textContent = "No mentors assigned";
    mentorsList.appendChild(noMentorItem);
  }

  // Toggle the display of the mentors list
  mentorsList.style.display = (mentorsList.style.display === 'none') ? 'block' : 'none';
});


    })
    const mentorsLists = document.querySelectorAll('.card ul');
    mentorsLists.forEach(mentorsList => {
      mentorsList.style.display = 'none';
    });
      
  
    const infoElement = document.querySelector('.info');
  infoElement.textContent = "No learner is selected";
  
    const footer = document.querySelector('footer')
    const currentYear = new Date().getFullYear()
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear - 1}`
  }
  

  

  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
