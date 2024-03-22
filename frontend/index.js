

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

  async function renderLearnerNames() {
    try {
      const learnersData = await fetchLearnersData();
      const mentorsData = await fetchMentorsData();
      console.log(learnersData);
      console.log(mentorsData);
      const container = document.querySelector('.cards')
      container.innerHTML = '';
  
      let selectedCard = null;
  
      for (let i = 0; i < learnersData.length; i++) {
        const learner = learnersData[i];
        const mentors = mentorsData.find(m => m.id === learner.mentorsId);
       
       
  
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
        card.appendChild(mentorsTitle)
  
        const mentorsList = document.createElement('ul');
        card.appendChild(mentorsList)
  
        if (mentors) {
          const mentorElement = document.createElement('li');
          mentorElement.textContent = `Mentor: ${mentors.firstName} ${mentors.lastName}`;
          mentorsList.appendChild(mentorElement);
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
      }
  
      
      const mentorsLists = document.querySelectorAll('.card ul');
      mentorsLists.forEach(mentorsList => {
        mentorsList.style.display = 'none';
      });
  
      const infoElement = document.querySelector('.info');
      infoElement.textContent = "No learner is selected";
    } catch (error) {
      console.error('Error rendering learner names: ', error.message);
    }
  }
  
  renderLearnerNames()

 
 
  
    const footer = document.querySelector('footer')
    const currentYear = new Date().getFullYear()
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear - 1}`
  

  

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
