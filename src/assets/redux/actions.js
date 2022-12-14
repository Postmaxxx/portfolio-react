export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme
})

export const setNavOpen = () => ({
    type: 'SET_NAV_OPEN',
})

export const setNavClose = () => ({
    type: 'SET_NAV_CLOSE',
})


export const setContactName = (text) => ({
    type: 'SET_CONTACT_NAME',
    payload: text
})

export const setContactEmail = (text) => ({
    type: 'SET_CONTACT_EMAIL',
    payload: text
})

export const setContactSubject = (text) => ({
    type: 'SET_CONTACT_SUBJECT',
    payload: text
})

export const setContactMessage = (text) => ({
    type: 'SET_CONTACT_MESSAGE',
    payload: text
})


export const setModal = (status) => ({
    type: 'SET_MODAL',
    payload: status
})


export const setCurrentGallery = (gallery) => ({
    type: 'SET_CURRENT_GALLERY',
    payload: gallery
})

export const setSplideMaxExpand = (expand) => ({
    type: 'SET_SPLIDEMAX_EXPAND',
    payload: expand
})
