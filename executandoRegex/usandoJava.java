import java.util.regex.*;

public class UsandoJava{
    public static void main(String[] args){
        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        Pattern pattern = Pattern.compile("[a-f]");
        Matcher matcher = pattern.matcher(texto);

        while(matcher.find()){
            System.out.printf("Posicoes: %s, %s/t Valor: %s/n",
            matcher.start(), matcher.end(), matcher.group());
        }

        System.out.println(texto.replaceAll("[7-9]", "Achei"));
    }
}
