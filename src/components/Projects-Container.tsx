import ProjectCard from './Project-Card';

const projects = [
    {
        title: 'Flashcards',
        description: `Aplicación de flashcards. En este proyecto, utilicé TDD para construir la interfaz de usuario. 
        Si bien el proceso pareció un poco mas tedioso, la construcción de la aplicación fue mucho mas fluida. La planificación
        fué una parte muy importante también. Bocetar la aplicación, y entender que componentes se necesitan, me ahorró muchos
        bloqueos a la hora de realizar el código. Sin duda este fué el proyecto que mejor pude llevar a cabo hasta ahora.`,
        image: 'images/projects/flashcards.png',
        url: 'https://tomasfunes.github.io/flashcards-web-app/',
        technologies: ['React', 'TypeScript', 'Tailwind', 'React Testing Library'],
    },
    {
        title: 'To-Do App',
        description: `Aplicación de lista de tareas. Este fue mi primer proyecto fullstack. Si bien hay algunas teconologías
        con las que no estoy familiarizado como Docker, pude aprender a integrar React con Spring Boot, 
        una base de datos, y hostearlo como un contenedor. El host fue realizado en Render experimentalmente. Luego
        decidí restructurar el codigo y hacer el host en GitHub Pages, por cuestiones de conveniencia.`,
        image: 'images/projects/todo.png',
        url: 'https://tomasfunes.github.io/todo/',
        technologies: ['React', 'TypeScript', 'Spring Boot', 'Docker', 'PostgreSQL', 'React Testing Library'],
    },
    {
        title: 'Wordle Clone',
        description: `Juego de Wordle. Un proyecto bastante divertido, sobre todo en la planificación. Investigar como son las
        reglas del juego, y cómo se puede implementar. Buscar en otras paginas como es generalmente el layout. Este proyecto me
        ayudó a entender mucho mas el poder de planificar antes de construir. En este caso, decidí usar Vanilla JavaScript
        simplemente para trabajar directamente sobre el DOM y comprender mejor como funciona.`,
        image: 'images/projects/wordle.png',
        url: 'https://tomasfunes.github.io/wordle/',
        technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Calendar App',
        description: `Aplicación de calendario. El mayor desafío que tuvo este proyecto es aprender a trabajar con los objetos
        de tipo Date. Hasta entonces no los había utilizado mucho y fué un poco engorroso llegar a entender como funcionan.
        Luego de ello el trabajo se hizo mas sencillo.`,
        image: 'images/projects/calendar.png',
        url: 'https://tomasfunes.github.io/calendar/',
        technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Dice Battle',
        description: `Juego de batalla de dados por turnos. Ha decir verdad creo que es el proyecto mas experimental que tuve.
        Esta idea no surgió de ningún sitio, sino de los viejos RPG que jugaba en la web cuando era chico. La aplicación es
        simplemente un sistema de batalla para ese tipo de juegos. Aún tiene un bug con las barras de vida (sin duda hoy en dia
        lo implementaría de una forma totalmente distinta), pero generalmente funciona bien`,
        image: 'images/projects/dice-battle.png',
        url: 'https://tomasfunes.github.io/dice-battle/',
        technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Pomodoro App',
        description: `Aplicación de pomodoro. El primer proyecto que realicé de forma autónoma. Es bastante sencillo tanto
        en lógica como en diseño, y es posible que contenga algun que otro bug (el proyecto quedó juntando polvo). Simplemente
        un temporizador de pomodoro, con un diseño bastante minimalista.`,
        image: 'images/projects/pomodoro.png',
        url: 'https://tomasfunes.github.io/pomodoro/',
        technologies: ['JavaScript', 'HTML', 'CSS'],
    },
]

export default function ProjectsContainer() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 py-4 border-b-2 border-gray-300 mx-4">Mis proyectos</h2>
            {projects.map((project) => (
                <ProjectCard 
                    key={project.title} 
                    title={project.title} 
                    description={project.description} 
                    image={project.image}
                    url={project.url}
                    technologies={project.technologies}
                />
            ))}
        </div>
    )
}