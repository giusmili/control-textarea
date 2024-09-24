# 🚀Elements de formulaire : le textarea
Dans un élément de formulaire comme un ```textarea``` grâce à la version html<sup>5</sup>, nous pouvon compter le nombre maxi de caractère.
__Exmple ci-dessous__ 
```html
    <form method="post" >
        <label for="text"><em>Attention Nombre de caractères maxi: 20</em></label>
        <textarea name="com" id="text" maxlength="64">Ici le texte...</textarea>
             <p>
                <output name="count" for="text">
                        0 Nombre de caractères
                </output>
            </p>
            <p class="warning" id="warning">Attention : Vous avez dépassé 20 caractères.</p>
       <button type="submit" aria-label="submit">Valider le formulaire</button>
    </form>
```
📝Pour plus de contrôle on peut utiliser ```javascript```

![cover](./asset/giusmili-lead-developer.svg)