const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('show');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');toggle.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('.faq-question').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');item.classList.toggle('open');button.setAttribute('aria-expanded',String(item.classList.contains('open')))}));
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('[data-demo-form]');if(form)form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('[data-form-message]');if(msg)msg.textContent='This is a design draft. Connect the form to your company email/backend before publishing.';});
