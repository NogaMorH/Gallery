'use strict'

$(init)

function init() {
    renderProjects()
}

function renderProjects() {
    const projects = getProjects()

    const strHtmls = projects.map(project => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${project.img}" alt=""/>
            </a>
            <div class="portfolio-caption">
                <h4>${project.title}</h4>
                <p class="text-muted">${project.desc}</p>
            </div>
        </div>`
    })
    $('.projects-container').html(strHtmls)
}