
const express = require('express');
const router = express.Router();

// STUB hardcode team and initial balances
let leaderboard = [
    { user: '@victor wong', received: 4, given: 2, redeemable: 6 },
    { user: '@Curtis', received: 4, given: 2, redeemable: 6 },
    { user: '@Andrew Wanex', received: 4, given: 2, redeemable: 6 },
    { user: '@kamaren mccord', received: 4, given: 2, redeemable: 6 },
    { user: '@Duke', received: 4, given: 2, redeemable: 6 },
    { user: '@victor wong', received: 4, given: 2, redeemable: 6 },
]

// Return full leaderboard information (summary and detail)
router.get('/leaderboard',
    function(req,res,next) {
        return res.json(leaderboard)
    }
)

router.get('/give/:from/:to', function(req,res) {
    const { from, to } = req.params;

    const findFromMember = leaderboard.filter((member)=>(member.user==from));
    const findToMember = leaderboard.filter((member)=>(member.user==to));

    if (!findFromMember.length)
        return res.json({ status: 'fail', message: 'Member giving taco not found'});
    else if (!findToMember.length)
        return res.json({ status: 'fail', message: 'Member receiving taco not found'});
    else if (findFromMember[0].redeemable <= 0)
        return res.json({ status: 'fail', message: 'Member giving taco has no more tacos to give'});
    else {
        findFromMember[0].redeemable -= 1;
        findToMember[0].redeemable += 1;
        return res.json({ 
            status: 'success', 
            message: `Success:
Member ${from} give a taco to ${to}!
${from} now has ${findFromMember[0].redeemable} tacos, 
and ${to} now has ${findToMember[0].redeemable} tacos.`});
    }

    return res.json({form:req.params.from,to:req.params.to})
})

module.exports = router;
