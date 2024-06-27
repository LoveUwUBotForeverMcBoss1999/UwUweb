document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [{
            title: 'About the New Look of the UwUBot website',
            date: '2024-06-26',
            summary: 'The better UwU web pages are now online. Your looking at that New Look Page!',
            link: 'blog/newlook.html'
        },
        {
            title: 'About the UwU General Bot. The New Bot for manage the UwU Server',
            date: '2024-05-08',
            summary: 'The UwU General bot manage the UwU Community server. The good bot for replace 90% of the bots of the UwU Server.',
            link: 'blog/uwugenerale.html'
        },
        {
            title: 'UwU Economy Banking System',
            date: '2024-05-08',
            summary: 'Check out This! We are added a new Banking system to UwU Economy System. Grate values!',
            link: 'blog/banking.html'
        }
    ];

    const blogGrid = document.getElementById('blogPosts');

    blogPosts.forEach(post => {
        const blogItem = document.createElement('div');
        blogItem.className = 'blog-item';
        blogItem.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>${post.date}</strong></p>
            <p>${post.summary}</p>
            <a href="${post.link}">Read more</a>
        `;
        blogGrid.appendChild(blogItem);
    });
});
Z