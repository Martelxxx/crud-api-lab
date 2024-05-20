const Team = require('../models/team');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//READ - GET /teams
router.get('/', async (req, res) => {
try {
    const foundTeams = await Team.find();
    res.status(200).json(foundTeams);
} catch (error) {
    res.status(500).json({ message: error.message });
}
});

//READ - GET /teams/:id
router.get('/:teamId', async (req, res) => {

    const teamId = req.params.teamId;
    try {
        const foundTeam = await Team.findById(teamId);
        if (foundTeam) {
            res.status(200).json(foundTeam);
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//DELETE - DELETE /teams/:id
router.delete('/:teamId', async (req, res) => {
    const teamId = req.params.teamId;
    try {
        const deletedTeam = await Team.findByIdAndDelete(teamId);
        if (deletedTeam) {
            res.status(200).json(deletedTeam);
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//UPDATE - EDIT /teams/:id
router.put('/:teamId', async (req, res) => {
    const teamId = req.params.teamId;
    try {
        const updatedTeam = await Team.findByIdAndUpdate(teamId, req.body);
        if (updatedTeam) {
            res.status(200).json(updatedTeam);
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
});
        



module.exports = router;