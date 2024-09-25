// ================= PATHS des ROUTES ================//

// ============ COMMUN PATHS ========================//
export const ADMIN = `/admin`
const create = '/create'
const edit = '/edit/:id'
const show = '/:id'

// ==============PATHS Setting ========================//
export const PROFIL_ADMIN = `${ADMIN}/profil`
export const UPDATE_PROFIL_ADMIN =`${PROFIL_ADMIN}/update`
export const UPDATE_PASSWORD_ADMIN =`${PROFIL_ADMIN}/password`

// ==============PATHS AUTH ========================//
export const LOGIN = `/`;
export const RESET_PASSWORD = `/reset-password`
export const FORGET_PASSWORD = `/forget-password`

// ==============PATHS ADMIN ========================//
export const DASHBOARD_ADMIN = `${ADMIN}/dashoard`

// ==============PATHS TUTEUR ========================//
export const TUTEUR = `/tutr`
export const DASHBOARD_TUTEUR = `${TUTEUR}/dashboard`

// ============== PAHTS TUTEUR ===============//
export const TUTEURS = `${ADMIN}/tuteurs`
export const SHOW_TUTEUR = `${TUTEURS}${show}`
export const ADD_TUTEUR = `${TUTEURS}${create}`
export const UPDATE_TUTEUR = `${TUTEURS}${edit}`

// ============== PAHTS ADMINISTRATION ===============//
export const ADMINISTRATION = `${ADMIN}/administration`
export const SHOW_ADMIN = `${ADMINISTRATION}${show}`
export const ADD_ADMIN = `${ADMINISTRATION}${create}`
export const UPDATE_ADMIN = `${ADMINISTRATION}${edit}`

// ============== PAHTS MODULE ADMIN ===============//
export const MODULE_ADMIN = `${ADMIN}/module`
export const SHOW_MODULE_ADMIN = `${MODULE_ADMIN}${show}`
export const ADD_MODULE_ADMIN = `${MODULE_ADMIN}${create}`
export const UPDATE_MODULE_ADMIN = `${MODULE_ADMIN}${edit}`

// ============== PAHTS SEANCES ADMIN ===============//
export const SEANCE_ADMIN = `${ADMIN}/seances`
export const SHOW_SEANCE_ADMIN = `${SEANCE_ADMIN}${show}`
export const ADD_SEANCE_ADMIN = `${SEANCE_ADMIN}${create}`
export const UPDATE_SEANCE_ADMIN = `${SEANCE_ADMIN}${edit}`
