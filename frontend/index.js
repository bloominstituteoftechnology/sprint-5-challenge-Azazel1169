

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  
  // Endpoint A [GET] http://localhost:3003/api/learners
  // Endpoint B [GET] http://localhost:3003/api/mentors

  

  async function fetchLearnersData() {
    try {
      const response = await axios.get('http://localhost:3003/api/learners');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message)
      return [];
    }
  }
  async function renderLearnerNames() {
    try {
      const learnersData = await fetchLearnersData();
      const container = document.querySelector('.cards')
      container.innerHTML = '';

      for (let i = 0; i < Math.min(learnersData.length); i++) {
        const learner = learnersData[i];
        const card = document.createElement('div');
        card.classList.add('card');
        
        const nameElement = document.createElement('h3');
        nameElement.textContent = learner.name;
        card.appendChild(nameElement)

        container.appendChild(card)
      }
      const infoElement = document.querySelector('.info');
      infoElement.textContent = "No learner is selected"
    } catch (error) {
      console.error('Error rendering learner names: ', error.message);
    }
  }
  renderLearnerNames()

 
 
  function footerHandler() {
    const footer = document.querySelector('footer')
    const currentYear = new Date().getFullYear()
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear - 1}`
  }

  footerHandler();

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
