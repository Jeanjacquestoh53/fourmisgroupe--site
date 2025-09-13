document.getElementById('year').textContent = new Date().getFullYear();
const leadForm = document.getElementById('leadForm');
leadForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const city = document.getElementById('city').value.trim();
  const leads = JSON.parse(localStorage.getItem('fourmis_leads')||'[]');
  leads.push({name,email,city,ts:new Date().toISOString()});
  localStorage.setItem('fourmis_leads', JSON.stringify(leads));
  document.getElementById('leadMsg').textContent = 'Merci ! Votre inscription a bien été prise en compte.';
  leadForm.reset();
});