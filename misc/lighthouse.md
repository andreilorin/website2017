### Google Lighthouse Audit

The Google Audit Tool is scoring websites on 4 categories: 
- Performance
- Accessibility
- Best Practices
- SEO

Lighthouse score for google.com
```
        99      57      80      50     
```

* **Initial _andreilorin.com_ release score**
```
        37      52      60      100     
```

* **Changed all images to [WebP](https://developers.google.com/speed/webp/) format**

Using a newer image format I improved the Performance and Accessibility scores 
```
        50      64      60      100     
```

* **Adding DOCTYPE**

The DOCTYPE declaratiom will add another small improvement to the Best Practices score
```
        48      64      67      100     
```

* **The [<rel="noreferrer">](https://developers.google.com/web/tools/lighthouse/audits/noopener) attribute**

Adding this attribute to all the links to other websites (GitHub, LindkedIn) gives another small improvement to the Best Practices score
```
        46      64      73      100     
```

* **Use full release JS libraries** 

I was using a bootstrap 4 alpha JS library release which had vulnerabilities, changing that to bootstrap 4.1.3 further increased the Best Practices score
```
        52      64      80      100     
```
