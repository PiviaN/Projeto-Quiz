import Auxiliary from "../auxiliary/auxiliary.js"
import Redirect from "./redirect.js"

const auxiliary = new Auxiliary()
const redirect = new Redirect()

let pageRedirect = auxiliary.queryParams.redirect || 1

if (pageRedirect > redirect.structures.length || pageRedirect < 1 || isNaN(pageRedirect)) {
    window.location.href = "/index.html"
} else {
    redirect.loadPageStructure(pageRedirect)
}