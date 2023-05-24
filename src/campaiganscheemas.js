




import * as Yup from 'yup';

export const campaignform = Yup.object({
    campaign_name: Yup.string().min(2).max(20).required('Please Enter Campaign Name'),

    select_user: Yup.string().required('Please Enter User'),
    rewards: Yup.string().required('Please Enter Your Rewards'),
    funding_goals: Yup.string().required('Please Enter Funding Goals'),
    music_sample:Yup.string().required('Please Enter music sample'),
    linked_your_account:Yup.string().required('Please Linke your Account'),
    category:Yup.string(),
  
 
});