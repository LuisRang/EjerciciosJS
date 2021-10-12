let answer = prompt("Bienvenido, Que tamaño de pizza desea? (personal,mediana,familiar")

switch (answer) {
    case "personal":
        let sabor=prompt("Que sabor desea? (pollo & champiñones, hawaina o carnes");
        if (sabor=="pollo & champiñones") {
            let queso = prompt("Con queso o sin queso");
            switch (queso) {
                case "Con queso":
                    
                    break;
            
                default:
                    break;
            }
            
        } else {
            
        }
        break;

    default:
        break;
}