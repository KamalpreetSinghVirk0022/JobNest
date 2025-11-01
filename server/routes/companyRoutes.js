import express from 'express'
import { registerCompany, loginCompany, getCompanyData, postJob, getCompanyJobApplicants, getCompanyPostedJobs,ChangeJobApplicationsStatus, changeVisibility } from '../controllers/companyController.js'
import multer from 'multer'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router=express.Router()

// Register a company 
router.post('/register',upload.single('image'), registerCompany)

// Company login
router.post('/login',loginCompany)

// Get company data
router.get('/company', protectCompany, getCompanyData)

// Post a new job
router.post('/post-job', protectCompany, postJob)

// Get company job applicants
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// Get company posted jobs
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

// Change application status
router.post('/change-status', protectCompany, ChangeJobApplicationsStatus)

// Change job visibility
router.post('/change-visibility', protectCompany, changeVisibility)


export default router