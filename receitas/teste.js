const texto = `
package cod3r;
/*
 * Imprimir a nota do aluno
 */
public class Nota {

    // Porta de entrada de um programa Java
    public static void main(String[] args) {
        
        int nota = 7;
        if(nota >= 7) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }
        
    }
 }`

console.log(texto.match(/(\/\/.*?\n)/g))